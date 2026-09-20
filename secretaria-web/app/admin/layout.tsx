import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function HomepageAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Header */}
      <div className="flex w-full h-25 p-6 bg-[#161b22] border-b-2 border-[#30363d]">
        {/* Inner Container */}
        <div className="flex w-full h-full">
          {/* Logo Container */}
          <div className="flex w-full h-full items-center justify-start pl-4 gap-3">
            <div className="flex p-2 rounded-lg text-[#ce3434] h-full aspect-square bg-[#332028] border-1 border-[#76314a] items-center justify-center">
              <LiaClinicMedicalSolid className="h-full w-full"/>
            </div>            
            <h1 className="text-white font-semibold">SAMU Marília</h1>
          </div>

          {/* Tabs Container */}
          <div className="flex w-full h-full items-center justify-center">
            <Tabs defaultValue="preview" className={"flex items-center justify-center h-full"}>
              <TabsList className={"flex bg-white/5 h-full"}>
                <TabsTrigger value="alert" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black px-6 rounded-r-none"}>
                  <FiAlertTriangle/>
                  Alertas
                </TabsTrigger>
                <TabsTrigger value="chat" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black px-6 rounded-l-none"}>
                  <MdOutlineChat/>
                  Live Chat
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Avatar and Exit Container */}
          <div className="flex w-full h-full gap-4 justify-end pr-4">
            <div className="flex items-center justify-center h-full bg-[#1c2330] gap-2 rounded-xl p-3">
              <Avatar className={"flex justify-center items-center text-red-500 border-2 border-blue-500/20 bg-blue-500/10 rounded-lg"}>
                <MdOutlineLocalPhone className=""/>
              </Avatar>
              <div className="flex-col">
                <h3 className="font-medium text-white text-sm">Ana Beatriz Costa</h3>
                <p className="font-light text-white/20 text-xs">TEL - 14 98182 6224</p>
              </div>
            </div>
            <Button variant="outline" className={"dark bg-transparent text-white/70 hover:text-white text-md font-normal px-4 py-6"}>
              Sair
            </Button>
          </div>

        </div>
      </div>
      {/* Homepage Content */}
      <div>
        <TabsContent value={"alert"}>
          {children}
        </TabsContent>
      </div>
    </div>
  )
}