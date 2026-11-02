'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoIosMedical } from 'react-icons/io'
import ClientItem from './ClientItem'
import { BaseUser, User } from '@/app/features/auth/types/User'
import AdminEvent from './AdminEvent'
import { Event } from '@/app/features/auth/types/Event'
import { ToggleGroup } from '@/components/ui/toggle-group'
import { useAuth } from '@/app/features/auth/api/AuthContext'
import { toast } from '@/components/ui/toast'
import { Spinner } from '@/components/ui/spinner'
import { CreateEventRequest } from '@/app/features/auth/requests/EventsRequests'
import { createEvent, getEventById } from '@/app/features/admin/api/adminApi'
import { generateProtocol } from '@/app/features/admin/api/helper'

interface EventSidebarProps {
    condition: string,
    clients: BaseUser[] | null,
    events: Event[] | null,
    locationValue: string;
    foundAddress: boolean;
    setFoundAddress: Dispatch<SetStateAction<boolean>>
}

const EventSidebar = ({ condition, clients, events, locationValue, foundAddress, setFoundAddress }: EventSidebarProps) => {
    const { user } = useAuth();

    const [tabSelected, setTabSelected] = useState("rescuers");

    const [clientSelected, setClientSelected] = useState<BaseUser | null>(null);

    const [loadingClients, setLoadingClients] = useState(false);
    const [loadingEvents, setLoadingEvents] = useState(false);
    const [eventList, setEventList] = useState<Event[]>(events ?? []);

    // Sincroniza o eventList sempre que a prop 'events' mudar no componente pai
    useEffect(() => {
        if (events) {
            setEventList(events);
        }
    }, [events]);

    useEffect(() => {
        if (clients) {
            setLoadingClients(false);
        } else {
            setLoadingClients(true)
        }
        if (events) {
            setLoadingEvents(false);
        } else {
            setLoadingEvents(true);
        }
    }, [clients, events])

    const handleSend = async () => {
        if (!user || !user.id) return;

        if (locationValue == "") {
            toast.add({
                type: "error",
                description: "Insire um endereço!",
            })
            return;
        }

        if (!foundAddress) {
            toast.add({
                type: "error",
                description: "Insire um endereço válido!",
            })
            return;
        }

        if (clientSelected == null) {
            toast.add({
                type: "error",
                description: "Selecione ambulâncias para enviar o chamado!",
            })
            return;
        }

        const driverId = clientSelected.id;
        if (!driverId) return;

        try {
            const newEventCode = await generateProtocol()()
            const eventRequest: CreateEventRequest = {
                protocol: newEventCode,
                address: locationValue,
                returnLocation: "",
                whatHappened: "",
                patientCondition: condition,
                apparentAge: -1,
                patientCount: -1,
                injuryCondition: "",
                observations: "",
                attendantId: user.id,
                driverId: driverId
            }

            const responseEvent = await createEvent(eventRequest);
            if (!responseEvent) {
                Error("Não foi possível enviar o alerta!");
                return;
            }
            const newEvent = await getEventById(responseEvent?.id)
            if (!newEvent) {
                Error("Não foi possível encontrar o alerta!");
                return;
            }
            setEventList((prevEvents) => [...prevEvents, newEvent]);
            setFoundAddress(false);
            setTabSelected("alerts-sent");
            setClientSelected(null);
            toast.add({
                type: "success",
                description: "Alerta enviado com sucesso!",
            })
        } catch (error) {
            toast.add({
                type: "error",
                description: String(error),
            })
        }
    }

    return (
        <div className='flex flex-col w-1/3 h-full min-h-0 rounded-xl shrink-0'>
            {/* Tabs Container */}
            <Tabs
                value={tabSelected}
                onValueChange={setTabSelected}
                className={"flex flex-col w-full h-full gap-0"}>
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

                {/* Tabs Contents */}
                <div className='w-full h-full flex flex-col'>

                    {/* Conteúdo da Aba: Socorristas */}
                    <TabsContent value="rescuers" className={"flex flex-col w-full h-full m-0 data-[state=inactive]:hidden"}>
                        {loadingClients ? (
                            <div className='flex flex-col w-full h-full justify-center items-center text-sm text-white/50 bg-[#1c2330]/25'>
                                <p>Carregando socorristas...</p>
                                <Spinner />
                            </div>
                        ) : (clients?.length ?? 0) === 0 ? (
                            <div className='flex w-full h-full justify-center items-center text-sm text-white/50 bg-[#1c2330]/25'>
                                <p>Nenhum socorrista cadastrado...</p>
                            </div>
                        ) : (
                            <>
                                <ToggleGroup className='flex flex-col p-3 w-full h-full items-start gap-3 bg-[#1c2330]/20 overflow-auto'>
                                    {(clients ?? []).map((client: BaseUser) => (
                                        <ClientItem key={client.id} client={client} setClientSelected={setClientSelected} clientSelected={clientSelected} />
                                    ))}
                                </ToggleGroup>
                                <Button onClick={() => handleSend()} className='w-full h-10 rounded-b-2xl rounded-t-none'>
                                    <h3 className='font-medium text-white'>
                                        Enviar Alerta de Socorro
                                    </h3>
                                </Button>
                            </>
                        )}
                    </TabsContent>

                    {/* Conteúdo da Aba: Alertas Enviados */}
                    <TabsContent value="alerts-sent" className={"flex flex-col w-full h-full m-0 data-[state=inactive]:hidden"}>
                        {loadingEvents ? (
                            <div className='flex flex-col w-full h-full justify-center items-center text-sm text-white/50 bg-[#1c2330]/25'>
                                <p>Carregando alertas...</p>
                                <Spinner />
                            </div>
                        ) : (eventList?.length ?? 0) === 0 ? (
                            <div className='flex w-full h-full justify-center items-center text-sm text-white/50 bg-[#1c2330]/25 rounded-b-2xl'>
                                <p>Nenhum alerta cadastrado...</p>
                            </div>
                        ) : (
                            <div className='flex overflow-auto scrollbar-none flex-col p-3 pb-18 w-full h-full items-start gap-3 bg-[#1c2330]/20 rounded-b-2xl'>
                                {eventList.map((event, index) => (
                                    <AdminEvent key={index} event={event} />
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default EventSidebar
