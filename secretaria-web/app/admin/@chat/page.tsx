"use client";

import React, { useState, useEffect } from "react";
import LiveChatWindow from "./_components/AdminLiveChat";
import { User } from "@/app/features/auth/types/User";
// import { getUsersFromApi } from "@/services/user-service"; // função fetch
import { BASE_USERS } from "@/app/features/auth/api/MockData";
import LoadingPage from "@/components/LoadingPage";

const AdminHomepageChat = () => {
  const users = BASE_USERS;

  const [clients, setClients] = useState<User[]>(users.filter(user => user.type == "Client"));
  const [selectedClient, setSelectedClient] = useState<User>(clients[0]);
  const [isLoading, setIsLoading] = useState(false);

  const location = selectedClient.address;

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
    <div className='flex w-full h-full gap-4'>
      <div className='w-1/2 h-full'>
        <LiveChatWindow 
          users={clients} 
          selectedClient={selectedClient}
          onSelectClient={setSelectedClient} 
        />       
      </div>
      
      <div className='flex flex-col flex-1 min-h-0 w-full gap-4'>
        <div className='flex flex-col flex-1 min-h-0 w-full gap-2'>
          <h3 className='text-white/50 font-semibold text-sm shrink-0'>
            Última Localização
          </h3>

          <div className='flex-1 flex flex-col min-h-0 justify-end items-center w-full h-full overflow-hidden rounded-2xl relative'>
            <div className='flex absolute shadow-lg border-black/30 justify-center items-center bg-white text-black rounded-xl h-fit w-fit max-w-5/6 py-3 px-5 mb-5 border-1 z-10'>
              <p>{location}</p>
            </div>
            <div className='flex w-full h-auto rounded-b-lg '>
              <img
                className='w-full h-full rounded-b-lg'
                src="https://developers.google.com/static/maps/documentation/mobility/operations/images/fleet_tracking_example.png?hl=pt-br"
                alt="GPS Tracking"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepageChat;