import React from 'react'
import LiveChatWindow from './_components/ClientLiveChat'
import { BASE_USERS } from '@/app/features/auth/api/MockData'

const ClientHomepageChat = () => {
  const users = BASE_USERS.filter(user => user.type == "Admin")

  return (
    <div className='w-full h-full'>
      <LiveChatWindow users={users}/>
    </div>
  )
}

export default ClientHomepageChat
