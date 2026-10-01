import SeverityStatus from '@/components/SeverityStatus';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2Icon, InfoIcon } from 'lucide-react';
import React from 'react'
import { IoIosMedical } from "react-icons/io";

const AdminHomepageAlert = () => {
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

            <div className='flex-1 p-2 min-h-0 w-full h-full overflow-hidden relative'>
              <Input 
                placeholder='Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP' 
                className='dark text-white shrink-0 bg-[#1c2330] rounded-b-none h-12 px-5'
              />
              <div className='w-full h-auto rounded-b-lg bg-amber-600'>
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

      {/* Right Sidebar */}
      <div className='flex flex-col w-1/3 h-full min-h-0 rounded-xl shrink-0'>
        {/* Tabs Container */}
        <Tabs className={"flex w-full h-full gap-0"}>
          <div className="flex w-full h-15 items-center justify-center">
            <TabsList className={"flex w-full bg-white/5 h-full rounded-b-none rounded-t-4xl"}>
              <TabsTrigger value="rescuers" className={"text-white/70 gap-3 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 px-6 border-none rounded-none rounded-tl-3xl"}>
                <IoIosMedical/>
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
                <Alert className='dark bg-[#1c2330]'>
                  <CheckCircle2Icon />
                  <AlertTitle>Payment successful</AlertTitle>
                  <AlertDescription>
                    Your payment of $29.99 has been processed. A receipt has been sent to
                    your email address.
                  </AlertDescription>
                </Alert>
                <Alert className='dark bg-[#1c2330]'>
                  <InfoIcon />
                  <AlertTitle>New feature available</AlertTitle>
                  <AlertDescription>
                    We&apos;ve added dark mode support. You can enable it in your account
                    settings.
                  </AlertDescription>
                </Alert>
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
                <Alert className='dark bg-[#1c2330]'>
                  <CheckCircle2Icon />
                  <AlertTitle>Payment successful</AlertTitle>
                  <AlertDescription>
                    Your payment of $29.99 has been processed. A receipt has been sent to
                    your email address.
                  </AlertDescription>
                </Alert>
                <Item className='bg-[#1c2330]/80'>
                  <ItemContent>
                    <ItemTitle className=''>
                      <SeverityStatus status={status}/>
                    </ItemTitle>
                    <ItemDescription>
                      A simple item with title and description.
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant="outline" size="sm">
                      Action
                    </Button>
                  </ItemActions>
                </Item>
                <Alert className='dark bg-[#1c2330]'>
                  <InfoIcon />
                  <AlertTitle>New feature available</AlertTitle>
                  <AlertDescription>
                    We&apos;ve added dark mode support. You can enable it in your account
                    settings.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>             
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default AdminHomepageAlert