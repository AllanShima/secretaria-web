import React from 'react'
import LiveChatWindow from './_components/AdminLiveChat'
import { Input } from '@/components/ui/input'
import { BASE_USERS } from '@/app/features/auth/api/MockData'
import { User } from '@/app/features/auth/types/User'

const AdminHomepageChat = () => {
  const users: User[] = BASE_USERS.filter(user => user.type == "Client");

  return (
    <div className='flex w-full h-full gap-4'>
      <div className='w-1/2 h-full'>
        <LiveChatWindow users={users}/>        
      </div>
      <div className='flex flex-col flex-1 min-h-0 w-full gap-4'>
        <h3 className='text-white/50 font-semibold text-sm shrink-0'>
          Localização
        </h3>

        <div className='flex-1 min-h-0 w-full h-full overflow-hidden relative'>
          <Input
            disabled
            placeholder='Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP'
            className='dark text-white shrink-0 rounded-b-none h-12 px-5'
          />
          <div className='w-full h-auto rounded-b-lg '>
            <img
              className='w-full h-full rounded-b-lg'
              src="https://developers.google.com/static/maps/documentation/mobility/operations/images/fleet_tracking_example.png?hl=pt-br"
              alt="GPS Tracking"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHomepageChat
