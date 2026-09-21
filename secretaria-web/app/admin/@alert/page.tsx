import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const AdminHomepageAlert = () => {
  return (
    <div className='flex w-full h-full gap-6'>
      {/* Left Side */}
      <div className='flex-col w-full h-full'>
        <div className='flex-col w-full h-fit'>
          <h1 className='text-white'>
            Enviar Alerta de Socorro
          </h1>
          <h4 className='text-white/50'>
            O alerta será enviado imediatamente aos socorristas SELECIONADOS.
          </h4>
        </div>
        {/* Options */}
        <div className='flex-col '>
          {/* Severity Level */}
          <div className=''>
            <h3 className='text-white/50 font-semibold'>
              Nível de Severidade
            </h3>
            <Tabs>
              <TabsList>
                <TabsTrigger value={"critical"}>
                  Crítico
                </TabsTrigger>
                <TabsTrigger value={"urgent"}>
                  Urgente
                </TabsTrigger>
                <TabsTrigger value={"moderate"}>
                  Moderado
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {/* Maps */}
          <div className='flex-col w-full h-full bg-amber-600'>
            <h3 className='text-white/50 font-semibold'>
              Localização
            </h3>
            <Input>
              
            </Input>
          </div>
        </div>
      </div>
      {/* Right Sidebar */}
      <div className='flex-col w-1/3 h-full bg-amber-500'>
        a
      </div>
    </div>
  )
}

export default AdminHomepageAlert
