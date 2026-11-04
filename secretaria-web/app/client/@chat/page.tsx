'use client'

import React, { useEffect, useState } from 'react'
import LiveChatWindow from './_components/ClientLiveChat'
import LoadingPage from '@/components/LoadingPage'
import { BaseUser, User } from '@/app/features/auth/types/User'
import { BASE_USERS } from '@/lib/MockData'
import { getAttendants } from '@/app/features/auth/api/authApi'
import { toast } from '@/components/ui/toast'

const ClientHomepageChat = () => {
  const [users, setUsers] = useState<BaseUser[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<BaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadClients() {
      try {
        setIsLoading(true);
        const data = await getAttendants();
        setUsers(data);
        if (data) {
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

    loadClients();
  }, []);

  if (isLoading) {
    return <LoadingPage/>;
  }

  return (
    <div className='w-full h-full'>
      <LiveChatWindow users={users!} selectedUser={selectedUser!} setSelectedUser={setSelectedUser!}/>
    </div>
  )
}

export default ClientHomepageChat
