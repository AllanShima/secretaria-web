import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const AdminHomepageAlert = () => {
  return (
    <div className='flex w-full h-full gap-6 overflow-hidden'>
      {/* Left Side */}
      <div className='flex flex-col flex-1 h-full min-h-0 gap-4'>
        {/* Header Section */}
        <div className='flex flex-col w-full shrink-0'>
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
            <Tabs defaultValue="critical">
              <TabsList className="bg-black/30">
                <TabsTrigger value="critical">Crítico</TabsTrigger>
                <TabsTrigger value="urgent">Urgente</TabsTrigger>
                <TabsTrigger value="moderate">Moderado</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Maps / Location Container */}
          <div className='flex flex-col flex-1 min-h-0 w-full gap-2'>
            <h3 className='text-white/50 font-semibold text-sm shrink-0'>
              Localização
            </h3>

            {/* Map image wrapper fills remaining vertical space */}
            <div className='flex-1 min-h-0 w-full rounded-b-lg overflow-hidden relative'>
            <Input 
              placeholder='Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP' 
              className='dark text-white shrink-0 bg-black/20 rounded-b-none'
            />
              <img 
                className='w-full h-full object-cover' 
                src="https://developers.google.com/static/maps/documentation/mobility/operations/images/fleet_tracking_example.png?hl=pt-br" 
                alt="GPS Tracking" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className='flex flex-col w-1/3 h-full min-h-0 bg-amber-300 p-4 rounded-xl shrink-0'>
        <Tabs>
          
        </Tabs>
      </div>
    </div>
  )
}

export default AdminHomepageAlert