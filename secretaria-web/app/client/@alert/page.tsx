import { Input } from '@/components/ui/input'
import React from 'react'
import ClientSidebar from './_components/ClientSidebar'
import { BASE_EVENTS, BASE_VEHICLES } from '@/app/features/auth/api/MockData';

const ClientHomepageAlert = () => {
  const vehicles = BASE_VEHICLES;
  const events = BASE_EVENTS;

  const eventLocation = null;
  const placeholder = "Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP" 
  const location = eventLocation != null ? eventLocation : placeholder;
  
  return (
    <div className='flex w-full h-full gap-4'>
      <div className='flex flex-col flex-1 min-h-0 w-full gap-2'>
        <h3 className='text-white/50 font-semibold text-sm shrink-0'>
          Localização
        </h3>

        <div className='flex-1 min-h-0 w-full h-full overflow-hidden relative'>
          <div className='flex justify-center items-center text-white rounded-b-none rounded-t-2xl h-12 px-5 border-1'>
            <p>
              {location}
            </p>
          </div>
          <div className='w-full h-auto rounded-b-lg '>
            <img
              className='w-full h-full rounded-b-lg'
              src="https://developers.google.com/static/maps/documentation/mobility/operations/images/fleet_tracking_example.png?hl=pt-br"
              alt="GPS Tracking"
            />
          </div>
        </div>
      </div>

      <div className='h-full w-1/3'>
      {/* Events right-Sidebar */}
      <ClientSidebar vehicles={vehicles} events={events}/>
      </div>

    </div>
  )
}

export default ClientHomepageAlert
