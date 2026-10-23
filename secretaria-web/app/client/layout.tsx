"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from "next/link";
import { BiSolidAmbulance } from "react-icons/bi";
import { useAuth } from "../features/auth/api/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { TbReload } from "react-icons/tb";

interface ClientLayoutProps {
  children: React.ReactNode;
  alert: React.ReactNode;
  chat: React.ReactNode;
}

export default function HomepageClientLayout({
  alert,
  chat,
}: ClientLayoutProps) {
  const router = useRouter();
  const { user } = useAuth();

  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!user) {
      console.log("Usuário não cadastrado.");
      router.push("/auth/login");
    }
  }, [user])

  return (
    <div className="flex-col w-full h-full">
      <Tabs defaultValue="preview" className={"flex-col h-full w-full gap-0"}>
        {/* Header */}
        <div className="flex w-full h-25 p-6 bg-[#161b22] border-b-2 border-[#30363d]">
          {/* Inner Container */}
          <div className="flex w-full h-full">
            {/* Logo Container */}
            <div className="flex w-full h-full items-center justify-start gap-3">
              <div className="flex p-2 rounded-lg text-[#ce3434] h-full aspect-square bg-[#332028] border-1 border-[#76314a] items-center justify-center">
                <LiaClinicMedicalSolid className="h-full w-full" />
              </div>
              <h1 className="text-white font-semibold">Rota SAMU</h1>
            </div>

            {/* Tabs Container */}
            <div className="flex w-full h-full items-center justify-center">
              <TabsList className={"flex bg-white/5 h-full"}>
                <TabsTrigger value="alert" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 px-6 border-none rounded-r-none"}>
                  <FiAlertTriangle />
                  <h2 className="font-light ">
                    Alertas
                  </h2>
                </TabsTrigger>
                <TabsTrigger value="chat" className={"text-white/70 hover:text-white data-active:text-black data-active:hover:text-black data-active:inset-shadow-sm inset-shadow-indigo-700 border-none px-6 rounded-l-none"}>
                  <MdOutlineChat />
                  <h2 className="font-light">
                    Live Chat
                  </h2>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Avatar and Exit Container */}
            <div className="flex w-full h-full gap-4 justify-end">
              <div className="flex items-center justify-center h-full bg-[#1c2330] gap-4 rounded-xl p-3">
                <span className="flex gap-2">
                  <Avatar className={"flex justify-center items-center text-[#25c345] border-2 border-[#1c7f3e] bg-[#1f4c2a] rounded-lg"}>
                    <BiSolidAmbulance/>
                  </Avatar>
                  <div className="flex-col">
                    <h3 className="font-medium text-white text-sm">{user?.name}</h3>
                    <p className="font-light text-white/20 text-xs">TEL - {user?.phoneNumber}</p>
                  </div>                  
                </span>


                <button onClick={() => setStatus(!status)} className="w-20 h-fit cursor-pointer">
                  {status == true ? (
                    <Badge className="w-full h-fit rounded-md border-[#1e7f1c] bg-[#204c1f] text-green-500">
                      <p>Online</p>
                      <TbReload/>
                    </Badge>  
                  ) : (
                    <Badge className="w-full h-fit rounded-md border-[#7f1c1c] bg-[#4c1f1f] text-red-500">
                      <p>Offline</p>
                      <TbReload/>
                    </Badge>
                  )}              
                </button>

              </div>
              <Link href="/auth/login">
                <Button variant="outline" className={"dark bg-transparent text-white/70 hover:text-white text-md font-normal px-4 py-6"}>
                  Sair
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Content Container (Prevents page scrolling) */}
        <div className="flex-1 w-full overflow-hidden px-6 py-6 bg-[#0d1117]">
          <TabsContent value="alert" className="h-full w-full m-0 data-[state=inactive]:hidden">
            <div className="h-full w-full overflow-y-auto">
              {alert}
            </div>
          </TabsContent>
          <TabsContent value="chat" className="h-full w-full m-0 data-[state=inactive]:hidden">
            <div className="h-full w-full overflow-y-auto">
              {chat}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}