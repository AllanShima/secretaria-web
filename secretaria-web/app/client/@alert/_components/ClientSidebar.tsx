'use client'

import { User } from '@/app/features/auth/types/User'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { Dispatch, useState } from 'react'
import { IoIosMedical, IoIosNotifications } from "react-icons/io";
import ClientNotificationItem from './ClientNotification'
import ClientEvent from './ClientEvent'
import { Vehicle } from '@/app/features/auth/types/Vehicle'
import { Event } from '@/app/features/auth/types/Event'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Notification } from '@/app/features/auth/types/Notification'
import { Spinner } from '@/components/ui/spinner'
import { RouteCoordinates } from '@/app/features/client/types/Routing'

interface ClientSidebarProps {
    events?: Event[] | null,
    notifications?: Notification[] | null,
    selectedEvent: Event | null,
    setSelectedEvent: Dispatch<React.SetStateAction<Event | null>>,
    setAddress: Dispatch<React.SetStateAction<string>>,
    isLoading: boolean,
    setLocationCoords: Dispatch<React.SetStateAction<RouteCoordinates>>,
    setIsRoutingLoading: Dispatch<React.SetStateAction<boolean>>,
    setEvents: Dispatch<React.SetStateAction<Event[] | null>>
}

const ClientSidebar = ({ 
    events, 
    notifications, 
    selectedEvent, 
    setSelectedEvent, 
    setAddress, 
    isLoading, 
    setLocationCoords, 
    setIsRoutingLoading, 
    setEvents }: ClientSidebarProps) => {
        
    return (
        <div className='flex flex-col w-full h-full min-h-0 rounded-3xl shrink-0'>
            {/* Tabs Container com aba padrão inicial */}
            <Tabs defaultValue="rescuers" className={"flex flex-col w-full h-full gap-0 overflow-hidden rounded-b-3xl"}>
                <div className="flex w-full min-h-15 items-center justify-center">
                    <TabsList className={"flex w-full bg-white/5 h-full rounded-b-none rounded-t-3xl"}>
                        <TabsTrigger value="rescuers" className={"text-white/70 gap-3 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 px-6 border-none rounded-none rounded-tl-3xl"}>
                            <IoIosMedical />
                            <h2 className="font-light">
                                Eventos
                            </h2>
                        </TabsTrigger>
                        <TabsTrigger value="alerts-sent" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 border-none px-6 rounded-none rounded-tr-3xl"}>
                            <IoIosNotifications />
                            <h2 className="font-light">
                                Notificações
                            </h2>
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/* Tabs Contents */}
                <div className='w-full h-full flex flex-col'>
                    
                    {/* Aba 1: Eventos (rescuers) */}
                    <TabsContent value="rescuers" className={"flex flex-col w-full h-full m-0 data-[state=inactive]:hidden"}>
                        <div className='flex flex-col w-full h-full items-center justify-center bg-[#1c2330]/20 rounded-b-3xl overflow-auto scrollbar-none'>
                            {isLoading ? (
                                <div className='flex text-white flex-col items-center justify-center gap-2'>
                                    <p>Carregando alertas...</p>
                                    <Spinner />
                                </div>
                            ) : (events?.length ?? 0) === 0 ? (
                                <div className='flex text-white flex-col items-center justify-center'>
                                    <p>Nenhum alerta no momento...</p>
                                </div>
                            ) : (
                                <div className='flex flex-col p-3 pb-20 w-full h-full items-start gap-3 overflow-auto scrollbar-none'>
                                    <RadioGroup value={selectedEvent} onValueChange={setSelectedEvent}>
                                        {(events ?? []).map(event => (
                                            <ClientEvent key={event.id} 
                                                event={event} 
                                                selectedEventCode={selectedEvent?.protocol ?? ''} 
                                                setAddress={setAddress} 
                                                setLocationCoords={setLocationCoords}
                                                setIsRoutingLoading={setIsRoutingLoading}
                                                setSelectedEvent={setSelectedEvent}
                                                selectedEvent={selectedEvent}
                                                setEvents={setEvents}
                                            />
                                        ))}
                                    </RadioGroup>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* Aba 2: Notificações (alerts-sent) */}
                    <TabsContent value="alerts-sent" className={"flex flex-col w-full h-full m-0 data-[state=inactive]:hidden"}>
                        <div className='flex flex-col w-full h-full items-center justify-center bg-[#1c2330]/20 rounded-b-3xl overflow-auto scrollbar-none'>
                            {isLoading ? (
                                <div className='flex text-white flex-col items-center justify-center gap-2'>
                                    <p>Carregando notificações...</p>
                                    <Spinner />
                                </div>
                            ) : (notifications?.length ?? 0) === 0 ? (
                                <div className='flex text-white flex-col items-center justify-center'>
                                    <p>Nenhuma notificação no momento...</p>
                                </div>
                            ) : (
                                <div className='flex flex-col p-3 w-full h-full items-start gap-3 overflow-auto scrollbar-none pb-20'>
                                    {(notifications ?? []).map((notification, index) => (
                                        <ClientNotificationItem key={index} notification={notification} events={events!}/>
                                    ))}
                                </div>
                            )}
                        </div>
                    </TabsContent>

                </div>
            </Tabs>
        </div>
    )
}

export default ClientSidebar