'use client'
import React, { useEffect, useState } from 'react'
import ClientSidebar from './_components/ClientSidebar'
import LoadingPage from '@/components/LoadingPage';
import { Event } from '@/app/features/auth/types/Event';
import CustomMap from '@/app/features/client/components/CustomMap';
import { getCurrentPosition, searchCoordenateFromAddress } from '@/app/features/client/api/NominatimAPI';
import { BASE_EVENTS } from '@/lib/MockData';
import { getEvents, getNotificationsByEventId } from '@/app/features/admin/api/adminApi';
import { toast } from '@/components/ui/toast';
import { Notification } from '@/app/features/auth/types/Notification';
import { loadCoordinatesForAddress } from '@/app/features/client/utils/mapHelper';
import { RouteCoordinates } from '@/app/features/client/types/Routing';

const ClientHomepageAlert = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRoutingLoading, setIsRoutingLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[] | null>(null);
  const [events, setEvents] = useState<Event[] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [address, setAddress] = useState("")
  const [locationCoords, setLocationCoords] = useState<RouteCoordinates>([]);

  // 1. Função isolada para poder ser reutilizada
  const loadClientsAndEvents = async () => {
    try {
      // Dica: Se quiser que o loading só apareça no primeiro carregamento, 
      // você pode controlar o setIsLoading com um estado de "isInitialLoad"
      const foundEvents = await getEvents();
      setEvents(foundEvents);

      const notificationsPromises = foundEvents.map(async (event) => {
        const notifications = await getNotificationsByEventId(event.id);
        return notifications;
      });

      const allNotificationsNested = await Promise.all(notificationsPromises);
      const allNotifications = allNotificationsNested.flat();

      const sortedNotifications = allNotifications
        .filter((notification): notification is Notification => notification !== null)
        .sort((a, b) => new Date(b.notifiedAt).getTime() - new Date(a.notifiedAt).getTime());

      setNotifications(sortedNotifications);

    } catch (error) {
      toast.add({
        type: "error",
        description: String(error),
        priority: "high",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 2. useEffect configurado para rodar na montagem e a cada 15 segundos
  useEffect(() => {
    setIsLoading(true);
    loadClientsAndEvents(); // Executa imediatamente ao abrir

    // Configura o intervalo de 15 segundos (15000 milissegundos)
    const intervalId = setInterval(() => {
      loadClientsAndEvents();
    }, 15000);

    // Limpa o intervalo quando o componente for desmontado para evitar vazamento de memória
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;

    const currentAddress = selectedEvent.address;
    setAddress(currentAddress);

    // Função interna para executar a busca da rota
    const fetchRoute = async () => {
      // Opcional: não acionar o loading visual a cada 20s para não ficar piscando a tela do usuário
      try {
        await loadCoordinatesForAddress(currentAddress, setLocationCoords);
      } catch (error) {
        console.error("Erro ao atualizar rota periodicamente:", error);
      }
    };

    // Executa a primeira vez imediatamente ao selecionar o evento
    setIsRoutingLoading(true);
    fetchRoute().finally(() => setIsRoutingLoading(false));

    // Configura o intervalo para rodar a cada 20 segundos (20000 milissegundos)
    const intervalId = setInterval(() => {
      fetchRoute();
    }, 20000);

    // Função de limpeza: limpa o intervalo quando o componente é desmontado ou o selectedEvent muda
    return () => clearInterval(intervalId);

  }, [selectedEvent]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className='flex w-full h-full gap-4'>
      <div className='flex flex-col flex-1 min-h-0 w-full gap-2'>
        <h3 className='text-white/50 font-semibold text-sm shrink-0'>
          Localização
        </h3>

        {/* Adicionado 'relative' aqui para servir de âncoras para os elementos absolute */}
        <div className='relative flex-1 flex flex-col min-h-0 justify-end items-center w-full h-full overflow-hidden rounded-2xl'>

          {/* Card do Endereço (Centralizado embaixo, como já estava) */}
          <div className='z-10 flex absolute shadow-lg border-black/30 justify-center items-center bg-white text-black rounded-xl h-fit w-fit max-w-5/6 py-3 px-5 mb-5 border border-zinc-200'>
            <p className="text-sm font-medium">
              {address ? address : "Selecione um alerta para localizar!"}
            </p>
          </div>

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

      <div className='h-full w-1/3'>
        {/* Events right-Sidebar */}
        <ClientSidebar
          events={events}
          notifications={notifications}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          setAddress={setAddress}
          isLoading={isLoading}
          setLocationCoords={setLocationCoords}
          setIsRoutingLoading={setIsRoutingLoading}
          setEvents={setEvents}
        />
      </div>

    </div>
  )
}

export default ClientHomepageAlert
