'use client'

import React, { useState } from 'react'
import LiveChatWindow from './_components/ClientLiveChat'
import LoadingPage from '@/components/LoadingPage'
import { User } from '@/app/features/auth/types/User'
import { BASE_USERS } from '@/lib/MockData'

const ClientHomepageChat = () => {

  const users = BASE_USERS;

  const [clients, setClients] = useState<User[]>(users.filter(user => user.type == "Admin"));
  const [selectedClient, setSelectedClient] = useState<User>(clients[0]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(clients);

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

  if (isLoading) {
    return <LoadingPage/>;
  }

  return (
    <div className='w-full h-full'>
      <LiveChatWindow users={clients} selectedClient={selectedClient} onSelectClient={setSelectedClient}/>
    </div>
  )
}

export default ClientHomepageChat
