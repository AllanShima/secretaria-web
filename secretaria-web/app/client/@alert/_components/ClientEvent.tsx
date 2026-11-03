"use client";

import React, { Dispatch, useEffect, useRef, useState } from "react";
import { Event } from "@/app/features/auth/types/Event";
import SeverityStatus from "@/app/features/admin/components/SeverityStatus";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IoLocationSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ClientEventDialog from "./ClientEventDialog";
import { getAttendants } from "@/app/features/auth/api/authApi";
import { concludeEvent } from "@/app/features/admin/api/adminApi";
import { ConcludeEventResponse } from "@/app/features/auth/responses/EventsResponses";
import { toast } from "@/components/ui/toast";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { loadCoordinatesForAddress } from "@/app/features/map/utils/mapHelper";
import { RouteCoordinates } from "@/app/features/map/types/Routing";

interface ClientEventProps {
  event: Event;
  selectedEventCode: string;
  setAddress: Dispatch<React.SetStateAction<string>>;
  setLocationCoords: Dispatch<React.SetStateAction<RouteCoordinates>>,
  setIsRoutingLoading: Dispatch<React.SetStateAction<boolean>>
}

const ClientEvent = ({ event, selectedEventCode, setAddress, setLocationCoords, setIsRoutingLoading }: ClientEventProps) => {
  const router = useRouter();
  const [createdByUser, setCreatedByUser] = useState("");

  useEffect(() => {
    async function loadAttendants() {
      const attendants = await getAttendants();
      const userFound = attendants.find((user) => user.id === event.attendantId);
      setCreatedByUser(userFound?.name ?? "");
    }
    loadAttendants();
  }, [])


  const radioId = `event-radio-${event.protocol}`;
  const value = event;

  // 1. Criamos uma referência para o input do rádio
  const radioRef = useRef<HTMLButtonElement>(null);

  const handleClickStyle = selectedEventCode === event.protocol ? "border-[#7f1c1c] bg-[#301b1b]" : "border-[#2a3447]"

  const handleFinishEvent = async () => {
    try {
      const count: ConcludeEventResponse | null = await concludeEvent(event.id);
      if (!count) {
        toast.add({
          type: "error",
          description: "Não foi possível concluir o alerta.",
          priority: "high",
        });
        return;
      }
      router.refresh();
    } catch (error) {
      toast.add({
        type: "error",
        description: String(error),
        priority: "high",
      });
    }
  }

  const handleChangeLocation = async () => {
    setIsRoutingLoading(true);
    try {
      if (event.returnLocation) {
        setIsRoutingLoading(true);
        setAddress(event.returnLocation);
        await loadCoordinatesForAddress(event.returnLocation, setLocationCoords);
        console.warn("Endereço atualizado no mapa");
      } else {
        toast.add({
          type: "error",
          description: "Localização não fornecida pelo atendente!",
          priority: "high",
        });
      }      
    } catch (error) {
      toast.add({
        type: "error",
        description: String(error),
        priority: "high",
      });
    } finally {
      setIsRoutingLoading(false);
    }
  }

  return (
    <Accordion className="flex w-full h-fit">
      <AccordionItem
        value={event.id}
        className={`w-full rounded-2xl border-1 ${handleClickStyle}`}
      >
        {/* Cabeçalho do Card / Trigger do Accordion */}
        <AccordionTrigger
          className="p-4 hover:no-underline [&[data-state=open]>svg]:rotate-180"
          onClick={() => {
            // 2. Quando clicar no accordion, disparamos o clique no rádio programaticamente
            radioRef.current?.click();
          }}
        >
          <div className="flex w-full h-full items-center justify-between gap-3 pr-6">
            {/* Ícone de Localização, Radio e Informações Principais */}
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1c2e42] text-[#2980b9]">
                <IoLocationSharp className="h-5 w-5" />
              </div>

              <div className="flex items-center absolute">
                <RadioGroupItem hidden disabled={event.vehicles[0].status === "FINISHED"} ref={radioRef} value={value} id={radioId} />
              </div>

              <div className="flex flex-col gap-2">
                <span className="flex items-center text-xs font-semibold text-white/50">
                  <p className="">Código: {event.protocol}</p>
                  <LuDot />
                  <p>{event.vehicles[0].status === "NOT_STARTED" ? "Em Andamento" : "Finalizado"}</p>
                </span>
                <h4 className="font-semibold text-md text-white">
                  {event.address}
                </h4>
                <p className="text-sm text-white/70">
                  Enviado por: {createdByUser ?? "Solicitante não informado"}
                </p>
              </div>
            </div>

            {/* Badge de Severidade */}
            <div className="absolute right-0 mr-4 mb-8 flex h-full items-end shrink-0 ">
              <SeverityStatus status={event.patientCondition} />
            </div>
          </div>
        </AccordionTrigger>

        {/* Conteúdo Expandido - Informações Adicionais */}
        <AccordionContent className="px-5 pb-5 pt-2 text-white">
          <div className="space-y-2">
            <h5 className="font-mono text-md font-bold text-white/80">
              Informações adicionais
            </h5>

            {/* Grid de Detalhes Adicionais (2 colunas) */}
            <div className="grid grid-cols-2 gap-4 text-xs">

              {/* Coluna 1 */}
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-white/60 font-semibold">
                    Consciência e Respiração
                  </p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.injuryCondition || "[Não informado]"}
                  </div>
                </div>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-3">
                {/* <div>
                  <p className="mb-1 text-white/60 font-semibold">
                    Idade ou Aparência Aproximada
                  </p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.apparentAge > 0
                      ? `${event.apparentAge} anos`
                      : "[Não informado]"}
                  </div>
                </div> */}

                <div>
                  <p className="mb-1 text-white/60 font-semibold">O que aconteceu?</p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.whatHappened ? event.whatHappened : "[Não informado]"}
                  </div>
                </div>
              </div>
            </div>
              <div>
                <p className="mb-1 text-white/60 font-semibold">Observações</p>
                <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                  {event.observations || "[Não informado]"}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-white/60 font-semibold">
                    Pronto-Socorro à Retornar
                  </p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.returnLocation || "[Não informado]"}
                  </div>
                </div>
              </div>
            <Dialog>
              {/* Botão Terminar Alerta */}
              {event.vehicles[0].status !== "FINISHED" ? (
                <div className="flex justify-center pt-3">
                  <Button
                    onClick={handleFinishEvent}
                    className="gap-2 shadow-lg rounded-full bg-[#d32f2f] px-6 py-2 text-xs font-bold text-white hover:bg-[#b71c1c]"
                  >
                    Terminar Alerta
                    <FaFlag className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <div className="flex px-10 justify-between pt-3">
                  <Button
                    onClick={handleChangeLocation}
                    className="gap-2 shadow-lg rounded-full bg-[#d32f2f] px-6 py-2 text-xs font-bold text-white hover:bg-[#b71c1c]"
                  >
                    Localizar Retorno
                    <FaMapMarkerAlt className="h-3 w-3" />
                  </Button>
                  <DialogTrigger render={
                    <Button
                      className="gap-2 shadow-lg rounded-full bg-[#d32f2f] px-6 py-2 text-xs font-bold text-white hover:bg-[#b71c1c]"
                    >
                      Exportar Dados
                      <FaFileExport className="h-3 w-3" />
                    </Button>
                  } />
                </div>
              )}
              <ClientEventDialog/>
            </Dialog>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ClientEvent;