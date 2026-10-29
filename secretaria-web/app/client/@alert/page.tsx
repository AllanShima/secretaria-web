'use client'
import React, { useEffect, useState } from 'react'
import ClientSidebar from './_components/ClientSidebar'
import { BASE_EVENTS, BASE_VEHICLES } from '@/app/features/auth/api/MockData';
import LoadingPage from '@/components/LoadingPage';
import { Event } from '@/app/features/auth/types/Event';
import CustomMap from '@/app/features/map/components/CustomMap';
import { searchCoordenateFromAddress } from '@/app/features/map/api/NominatimAPI';

const ClientHomepageAlert = () => {
  const vehicles = BASE_VEHICLES;
  const events = BASE_EVENTS;

  const [isLoading, setIsLoading] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState<Event>(events[0]);

  const [locationCoords, setLocationCoords] = useState<[number, number][]>([[0, 0]]);

  const eventAddress = selectedEvent.address;
  const placeholder = "Selecione um evento para emitir sua localização!" 
  const address = eventAddress != null ? eventAddress : placeholder;

  

  // useEffect(() => {
  //   async function loadClients() {
  //     try {
  //       const data = await getUsersFromApi();
  //       const filteredClients = data.filter((user: User) => user.type == "Client");
  //       setClients(filteredClients);
  //     } catch (error) {
  //       console.error("Erro ao buscar clientes:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   loadClients();
  // }, []);

  useEffect(() => {
    async function loadCoordinates() {
      const coords = await searchCoordenateFromAddress(address);
      setLocationCoords(coords ? [[coords.lat, coords.lng]] : []);
    }

    loadCoordinates();
  }, [address])

  if (isLoading) {
    return <LoadingPage/>;
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
              {address}
            </p>
          </div>
          <div className='z-0 flex w-full h-full rounded-b-lg '>
            <CustomMap routeCords={locationCoords}/>
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
        <ClientSidebar vehicles={vehicles} events={events} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>
      </div>

    </div>
  )
}

export default ClientHomepageAlert
