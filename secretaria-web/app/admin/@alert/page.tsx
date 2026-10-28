'use client'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EventSidebar from './_components/EventSidebar';
import { useAuth } from '@/app/features/auth/api/AuthContext';
import { BASE_EVENTS, BASE_USERS, BASE_VEHICLES } from '@/app/features/auth/api/MockData';
import { useState } from 'react';
import CustomMap from '@/app/features/map/components/CustomMap';
import { CiSearch } from "react-icons/ci";
import { toast } from '@/components/ui/toast';
import { searchCoordenateFromAddress } from '@/app/features/map/api/NominatimAPI';

const AdminHomepageAlert = () => {
  // try {
  //   const data = await getUsers();
  //   return <UserList users={data} />;
  // } catch (error) {
  //   return <p>Ocorreu um erro ao carregar os usuários.</p>;
  // }
  const [value, setValue] = useState("");
  const [currentCoords, setCurrentCoords] = useState<[number, number][]>([]);
  const users = BASE_USERS;
  const events = BASE_EVENTS;

  const handleSearchAddress = async () => {
    if (value !== "") {
      const coordinates = await searchCoordenateFromAddress(value);
      setCurrentCoords(coordinates ? [[coordinates.lat, coordinates.lng]] : []);
      console.log(currentCoords);
    } else {
      toast.add({
        type: "error",
        description: "Digite um endereço!",
        priority: "high",
      })
    }
  }

  const ButtonStyle = "text-white/30 hover:text-red-300 data-active:bg-[#301b24] data-active:border-red-600 data-active:text-red-500 data-active:hover:text-red-500 bg-[#1c2330] border-1 border-[#30363d] rounded-sm";
  return (
    <div className='flex w-full h-full gap-6 overflow-hidden'>
      {/* Left Side */}
      <div className='flex flex-col flex-1 h-full min-h-0 gap-4'>
        {/* Header Section */}
        <div className='flex flex-col w-full shrink-0 gap-1'>
          <h1 className='text-white text-xl font-bold'>
            Enviar Alerta de Socorro
          </h1>
          <h4 className='text-white/50 text-sm'>
            O alerta será enviado imediatamente aos socorristas SELECIONADOS.
          </h4>
        </div>

        {/* Options Container */}
        <div className='flex flex-col flex-1 min-h-0 w-full gap-4 overflow-hidden'>
          {/* Severity Level */}
          <div className='flex flex-col w-full shrink-0 gap-2'>
            <h3 className='text-white/50 font-semibold text-sm'>
              Nível de Severidade
            </h3>
            <Tabs className={"h-12"} defaultValue="critical">
              <TabsList className="w-full h-30 gap-2 bg-black/10 ">
                <TabsTrigger className={ButtonStyle} value="critical">Crítico</TabsTrigger>
                <TabsTrigger className={ButtonStyle} value="urgent">Urgente</TabsTrigger>
                <TabsTrigger className={ButtonStyle} value="moderate">Moderado</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Maps / Location Container */}
          <div className='flex flex-col flex-1 min-h-0 w-full gap-2'>
            <h3 className='text-white/50 font-semibold text-sm shrink-0'>
              Localização
            </h3>

            <div className='flex-1 p-2 min-h-0 w-full flex flex-col overflow-hidden'>
              {/* Input com altura fixa e sem encolher */}
              <div className='flex w-full items-center bg-[#1c2330] rounded-lg rounded-b-none overflow-hidden border border-zinc-700'>
                <Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder='Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP'
                  className='dark text-white bg-transparent transition rounded-none border-zinc-700 h-12 flex-1 px-5'
                />          
                
                <button 
                  onClick={handleSearchAddress}
                  type='button' 
                  className='flex items-center justify-center w-12 h-12 bg-transparent hover:bg-white/10 text-white transition-colors shrink-0'
                >
                  <CiSearch className='w-5 h-5'/>
                </button>
              </div>


              {/* Container do mapa com flex-1 e min-h-0 para respeitar o espaço livre e não estourar */}
              <div className='w-full flex-1 min-h-0 rounded-b-lg bg-amber-600 relative overflow-hidden'>
                <CustomMap routeCords={currentCoords} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <EventSidebar users={users} events={events} locationValue={value} />
    </div>
  )
}

export default AdminHomepageAlert