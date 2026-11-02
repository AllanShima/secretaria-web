'use client'
import React, { useEffect, useState } from 'react'
import ClientSidebar from './_components/ClientSidebar'
import LoadingPage from '@/components/LoadingPage';
import { Event } from '@/app/features/auth/types/Event';
import CustomMap from '@/app/features/map/components/CustomMap';
import { getCurrentPosition, searchCoordenateFromAddress } from '@/app/features/map/api/NominatimAPI';
import { BASE_EVENTS } from '@/lib/MockData';
import { getEvents, getNotificationsByEventId } from '@/app/features/admin/api/adminApi';
import { toast } from '@/components/ui/toast';
import { Notification } from '@/app/features/auth/types/Notification';

const ClientHomepageAlert = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[] | null>(null);
  const [events, setEvents] = useState<Event[] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [address, setAddress] = useState("")
  const [locationCoords, setLocationCoords] = useState<[number, number][]>([]);

  useEffect(() => {
    async function loadClientsAndEvents() {
      try {
        setIsLoading(true)
        const foundEvents = await getEvents();
        setEvents(foundEvents);

        // setSelectedEvent(foundEvents[0]);
        // 1. Filtra para manter somente os eventos não concluídos 
        // (ajuste a condição de acordo com o status ou campo que define se está concluído, ex: patientCondition !== 'Finalizado' ou status !== 'Finalizado')
        // const activeEvents = foundEvents.filter(event => event.vehicles[0].status !== "FINISHED");

        // 2. Busca as notificações de cada evento ativo em paralelo usando Promise.all e map
        const notificationsPromises = foundEvents.map(async (event) => {
          const notifications = await getNotificationsByEventId(event.id);
          return notifications; // Retorna a lista de notificações daquele evento
        });

        // Aguarda todas as requisições terminarem
        const allNotificationsNested = await Promise.all(notificationsPromises);

        // 3. Achata (flatten) a lista caso queira uma única lista contendo todas as notificações juntas
        const allNotifications = allNotificationsNested.flat();

        // Faça algo com a lista unificada de notificações, por exemplo, salvando em um estado:
        setNotifications(allNotifications.filter((notification): notification is Notification => notification !== null));

      } catch (error) {
        toast.add({
          type: "error",
          description: String(error),
          priority: "high",
        });
      } finally {
        setIsLoading(false)
      }
    }

    loadClientsAndEvents();
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;

    // Atualiza o endereço visualmente logo de cara
    const currentAddress = selectedEvent.address;
    setAddress(currentAddress);

    async function loadCoordinates() {
      // Opcional: const currentPos = await getCurrentPosition();

      // Passa o endereço direto da constante, evitando o delay do state assíncrono
      const coords = await searchCoordenateFromAddress(currentAddress);
      if (coords) {
        setLocationCoords([[coords.lat, coords.lng]]);
      }
    }

    loadCoordinates();
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

        <div className='flex-1 flex flex-col min-h-0 justify-end items-center w-full h-full overflow-hidden rounded-2xl'>
          <div className='z-10 flex absolute shadow-lg border-black/30 justify-center items-center bg-white text-black rounded-xl h-fit w-fit max-w-5/6 py-3 px-5 mb-5 border-1'>
            <p>
              {address ? address : "Selecione um alerta para localizar!"}
            </p>
          </div>
          <div className='z-0 flex w-full h-full rounded-b-lg '>
            <CustomMap routeCords={locationCoords} />
            {/* <img
              className='w-full h-full rounded-b-lg'
              src="https://developers.google.com/static/maps/documentation/mobility/operations/images/fleet_tracking_example.png?hl=pt-br"
              alt="GPS Tracking"
            /> */}
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
        />
      </div>

    </div>
  )
}

export default ClientHomepageAlert
