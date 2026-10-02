import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EventSidebar from './_components/EventSidebar';

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
      <EventSidebar/>
    </div>
  )
}

export default AdminHomepageAlert