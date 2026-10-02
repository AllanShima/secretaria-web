import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2Icon, InfoIcon } from 'lucide-react'
import React from 'react'
import { IoIosMedical } from 'react-icons/io'
import AlertItem from './AlertItem'
import RescuerItem from './RescuerItem'

const EventSidebar = () => {
    return (
        <div className='flex flex-col w-1/3 h-full min-h-0 rounded-xl shrink-0'>
            {/* Tabs Container */}
            <Tabs className={"flex w-full h-full gap-0"}>
                <div className="flex w-full h-15 items-center justify-center">
                    <TabsList className={"flex w-full bg-white/5 h-full rounded-b-none rounded-t-4xl"}>
                        <TabsTrigger value="rescuers" className={"text-white/70 gap-3 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 px-6 border-none rounded-none rounded-tl-3xl"}>
                            <IoIosMedical />
                            <h2 className="font-light">
                                Socorristas
                            </h2>
                        </TabsTrigger>
                        <TabsTrigger value="alerts-sent" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 border-none px-6 rounded-none rounded-tr-3xl"}>
                            <Avatar className={"w-5 h-5 bg-white justify-center items-center"}>
                                <p className='text-[8px] text-black'>
                                    12
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
                        <div className='flex flex-col p-3 w-full h-full items-start gap-3 bg-[#1c2330]/20'>
                            <RescuerItem/>
                            <RescuerItem/>
                        </div>
                        {/* Button */}
                        <Button className='w-full h-10 rounded-b-2xl rounded-t-none'>
                            <h3 className='font-medium text-white '>
                                Enviar Alerta de Socorro
                            </h3>
                        </Button>
                    </TabsContent>
                    <TabsContent value={"alerts-sent"} className={"w-full h-full m-0 data-[state=inactive]:hidden"}>
                        {/* Content */}
                        <div className='flex flex-col p-3 w-full h-full items-start gap-3 bg-[#1c2330]/20 rounded-b-2xl'>
                            <AlertItem/>
                            <AlertItem/>
                            <AlertItem/>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default EventSidebar
