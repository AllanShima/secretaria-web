"use client";

import React, { useState, useEffect } from "react";
import LiveChatWindow from "./_components/AdminLiveChat";
import { BaseUser, Driver, User } from "@/app/features/auth/types/User";
// import { getUsersFromApi } from "@/services/user-service"; // função fetch
import LoadingPage from "@/components/LoadingPage";
import CustomMap from "@/app/features/client/components/CustomMap";
import { searchCoordenateFromAddress } from "@/app/features/client/api/NominatimAPI";
import { toast } from "@/components/ui/toast";
import { BASE_USERS } from "@/lib/MockData";
import { getDriverById, getDrivers } from "@/app/features/auth/api/authApi";
import { RouteCoordinates } from "@/app/features/client/types/Routing";
import { Event } from "@/app/features/auth/types/Event";
import { getEventLocationById, getEvents } from "@/app/features/admin/api/adminApi";
import { LocationEventResponse } from "@/app/features/auth/responses/EventsResponses";
import { RoutingPreviewRequest } from "@/app/features/client/requests.ts/MapRequests";
import { getRoutingPreview } from "@/app/features/client/api/mapApi";

const AdminHomepageChat = () => {

  const [users, setUsers] = useState<BaseUser[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<BaseUser | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isRoutingLoading, setIsRoutingLoading] = useState(false);

  const [locationCoords, setLocationCoords] = useState<RouteCoordinates>([]);

  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);

        const getAllEvents: Event[] = await getEvents();
        setEvents(getAllEvents);

        const data: BaseUser[] = await getDrivers();
        setUsers(data);
        if (data && data.length > 0) {
          setSelectedUser(data[0]);
        }
      } catch (error) {
        toast.add({
          type: "error",
          description: String(error),
          priority: "high",
        })
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

useEffect(() => {
  if (!selectedUser || !events) return;

  const loadDriverLocation = async (user: BaseUser) => {
    try {
      setIsRoutingLoading(true);
      const fullDriverInfo: Driver | null = user.id
        ? await getDriverById(user.id)
        : null;
        
      const latitude = fullDriverInfo?.vehicle?.latitude;
      const longitude = fullDriverInfo?.vehicle?.longitude;

      // Se o motorista não tiver latitude/longitude cadastradas, interrompe
      if (latitude === undefined || longitude === undefined) return;

      // Mude de .find para .filter
      const foundEventsOfVehicle: Event[] = events.filter(
        (event) => event.vehicles[0]?.vehicleId == fullDriverInfo?.vehicle?.id
      );
      const onGoingEventOfVehicle: Event | undefined = foundEventsOfVehicle.find(
        (event) => event.vehicles[0]?.status === "NOT_STARTED"
      );

      // Se encontrou o evento e ele tem endereço, busca as coordenadas do destino
      if (onGoingEventOfVehicle?.address) {
        const eventCoords: any = await searchCoordenateFromAddress(onGoingEventOfVehicle.address);

        // Valida se realmente retornou lat/lng antes de prosseguir
        if (eventCoords && eventCoords.lat !== undefined && eventCoords.lng !== undefined) {
          const routingPreviewBody: RoutingPreviewRequest = {
            originLat: latitude,
            originLng: longitude,
            destLat: eventCoords.lat,
            destLng: eventCoords.lng,
          };
        
          const routingPreview: any = await getRoutingPreview(routingPreviewBody);
          
          if (routingPreview && routingPreview.coordinates) {
            const formattedRouteCoords = routingPreview.coordinates.map(
              (item: { lat: number; lng: number }) => [item.lat, item.lng]
            ) as RouteCoordinates;

            formattedRouteCoords.distanceMeters = routingPreview.distanceMeters ?? 0;
            formattedRouteCoords.durationSeconds = routingPreview.durationSeconds ?? 0;

            setLocationCoords(formattedRouteCoords);
            return;
          }
        }
      }

      // Fallback caso não tenha evento ou a rota falhe: mostra apenas a localização do veículo
      const fallbackCoords = [[latitude, longitude]] as RouteCoordinates;
      fallbackCoords.distanceMeters = 0;
      fallbackCoords.durationSeconds = 0;
      setLocationCoords(fallbackCoords);

    } catch (error) {
      console.error("Erro ao carregar a localização do motorista:", error);
    } finally {
      setIsRoutingLoading(false);
    }
  };

  loadDriverLocation(selectedUser);
}, [selectedUser, events]);

if (isLoading || !users || !selectedUser) {
  return <LoadingPage />;
}

return (
  <div className='flex w-full h-full gap-4'>
    <div className='w-1/2 h-full'>
      <LiveChatWindow
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>

    <div className='flex flex-col flex-1 min-h-0 w-full gap-4'>
      <div className='flex flex-col flex-1 min-h-0 w-full gap-2'>
        <h3 className='text-white/50 font-semibold text-sm shrink-0'>
          Última Localização
        </h3>

        <div className='flex-1 flex flex-col min-h-0 justify-end items-center w-full h-full overflow-hidden rounded-2xl relative'>

          {/* Card de Distância e Duração (Posicionado no topo à esquerda do mapa) */}
          {locationCoords.distanceMeters !== undefined && locationCoords.distanceMeters > 0 && (
            <div className="z-10 flex items-center gap-4 absolute top-4 left-14 bg-zinc-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-zinc-700 shadow-xl">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400">Distância</span>
                <span className="text-sm font-semibold">
                  {(locationCoords.distanceMeters / 1000).toFixed(2)} km
                </span>
              </div>

              <div className="h-8 w-[1px] bg-zinc-700" /> {/* Linha divisoria */}

              <div className="flex flex-col">
                <span className="text-xs text-zinc-400">Tempo Estimado</span>
                <span className="text-sm font-semibold">
                  {Math.round(locationCoords.durationSeconds! / 60)} min
                </span>
              </div>
            </div>
          )}

          {/* Container do Mapa */}
          <div className='z-0 flex w-full h-full rounded-b-lg'>
            <CustomMap routeCords={locationCoords} isLoading={isRoutingLoading} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default AdminHomepageChat;