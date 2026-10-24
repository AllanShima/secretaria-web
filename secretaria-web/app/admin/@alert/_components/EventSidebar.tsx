'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import { IoIosMedical } from 'react-icons/io'
import ClientItem from './ClientItem'
import { User } from '@/app/features/auth/types/User'
import AdminEvent from './AdminEvent'
import { Event } from '@/app/features/auth/types/Event'
import { ToggleGroup } from '@/components/ui/toggle-group'
import { useAuth } from '@/app/features/auth/api/AuthContext'
import { toast } from '@/components/ui/toast'

interface EventSidebarProps {
    users: User[],
    events: Event[],
    locationValue: string;
}

const EventSidebar = ({users, events, locationValue}: EventSidebarProps) => {
    const { user } = useAuth();

    const [tabSelected, setTabSelected] = useState("rescuers");

    const [clientsSelected, setClientsSelected] = useState<User[]>([]);

    const clients: User[] = users.filter((user) => user.type == "Client");
    const [eventList, setEventList] = useState<Event[]>(events);

    const handleSend = () => {
        if (!user) return;

        if (locationValue == "" || clientsSelected.length === 0) {
            toast.add({
                type: "error",
                description: "Insira a localização ou ambulâncias!",
            })
            return;
        }

        const newEvent: Event = {
            id: "evt-002",
            code: "ATD-2026-002",
            severity: "urgent",
            address: "Rua Das Roseiras, 120 - Jardim Fragata, Marília - SP",
            description: "Queda de própria altura com suspeita de fratura.",
            injuryLocations: ["Membro Superior Esquerdo"],
            createdByUser: user,
            status: "Em Andamento",
            operatorUser: clientsSelected, // Mariana Souza
            createdAt: new Date("2024-03-05T09:00:00Z")
        }
        setEventList((prevEvents) => [...prevEvents, newEvent]);
        setTabSelected("alerts-sent");
        setClientsSelected([]);
        toast.add({
            type: "success",
            description: "Alerta enviado com sucesso!",
        })
    }

    return (
        <div className='flex flex-col w-1/3 h-full min-h-0 rounded-xl shrink-0'>
            {/* Tabs Container */}
            <Tabs
            value={tabSelected}
            onValueChange={setTabSelected}  
            className={"flex w-full h-full gap-0"}>
                <div className="flex w-full h-15 min-h-15 items-center justify-center">
                    <TabsList className={"flex w-full bg-white/5 h-full rounded-b-none rounded-t-4xl"}>
                        <TabsTrigger value="rescuers" className={"text-white/70 gap-3 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 px-6 border-none rounded-none rounded-tl-3xl"}>
                            <IoIosMedical />
                            <h2 className="font-light">
                                Socorristas
                            </h2>
                        </TabsTrigger>
                        <TabsTrigger value="alerts-sent" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 border-none px-6 rounded-none rounded-tr-3xl"}>
                            <Avatar className={"w-4 h-4 bg-white justify-center items-center"}>
                                <p className='text-[8px] text-black'>
                                    {eventList.length}
                                </p>
                            </Avatar>
                            <h2 className="font-light">
                                Alertas Enviados
                            </h2>
                        </TabsTrigger>
                    </TabsList>
                </div>
                {/* Tabs Contents (das duas abas) */}
                <div className='w-full h-full flex flex-col'>
                    <TabsContent value={"rescuers"} className={"flex flex-col w-full h-full m-0 data-[state=inactive]:hidden"}>
                        {/* Content */}
                        <ToggleGroup multiple className='flex flex-col p-3 w-full h-full items-start gap-3 bg-[#1c2330]/20'>
                            {clients.map((user: User) => (
                                <ClientItem key={user.id} user={user} setClientsSelected={setClientsSelected}/>
                            ))}
                        </ToggleGroup>
                        {/* Button */}
                        <Button onClick={() => handleSend()} className='w-full h-10 rounded-b-2xl rounded-t-none'>
                            <h3 className='font-medium text-white '>
                                Enviar Alerta de Socorro
                            </h3>
                        </Button>
                    </TabsContent>
                    <TabsContent value={"alerts-sent"} className={"flex w-full h-full m-0 data-[state=inactive]:hidden"}>
                        {/* Content */}
                        <div className='flex overflow-auto scrollbar-none flex-col p-3 pb-18 w-full h-full items-start gap-3 bg-[#1c2330]/20 rounded-b-2xl'>
                            {eventList.map((event, index) => (
                                <AdminEvent key={index} event={event}/>
                            ))}
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default EventSidebar
