"use client";

import React, { useEffect, useRef, useState } from "react";
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

interface ClientEventProps {
  event: Event;
  selectedEventCode: string;
  onFinishEvent?: (eventId: string) => void;
}

const ClientEvent = ({ event, selectedEventCode, onFinishEvent }: ClientEventProps) => {

  const radioId = `event-radio-${event.code}`;
  const value = event;
  
  // 1. Criamos uma referência para o input do rádio
  const radioRef = useRef<HTMLButtonElement>(null);

  const handleClickStyle = selectedEventCode === event.code ? "border-[#7f1c1c] bg-[#301b1b]" : "border-[#2a3447]"

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
                <RadioGroupItem hidden disabled={event.status === "Finalizado"} ref={radioRef} value={value} id={radioId} />
              </div>

              <div className="flex flex-col gap-2">
                <span className="flex items-center text-xs font-semibold text-white/50">
                  <p className="">Código: {event.code}</p>
                  <LuDot />
                  <p>{event.status}</p>
                </span>
                <h4 className="font-semibold text-md text-white">
                  {event.address}
                </h4>
                <p className="text-sm text-white/70">
                  Enviado por: {event.createdByUser?.name ?? "Solicitante não informado"}
                </p>
              </div>
            </div>

            {/* Badge de Severidade */}
            <div className="absolute right-0 mr-4 mb-8 flex h-full items-end shrink-0 ">
              <SeverityStatus status={event.severity} />
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
                    Pronto-Socorro à Retornar
                  </p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.hospitalToReturn || "[Não informado]"}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-white/60 font-semibold">
                    Idade ou Aparência Aproximada
                  </p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.approximateAge
                      ? `${event.approximateAge} anos`
                      : "[Não informado]"}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-white/60 font-semibold">Quantidade</p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.quantity ? `${event.quantity} ferido(s)` : "1 ferido"}
                  </div>
                </div>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-white/60 font-semibold">
                    Consciência e Respiração
                  </p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.consciousnessAndBreathing || "[Não informado]"}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-white/60 font-semibold">Sangramento</p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.bleeding ? "Com sangramento" : "Nenhum sangramento visível"}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-white/60 font-semibold">Causa</p>
                  <div className="rounded-xl border border-[#2e3748] bg-[#1a2332] p-2.5 text-white/80">
                    {event.cause || "[Não informado]"}
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Terminar Alerta */}
            {event.status !== "Finalizado" && (
              <div className="flex justify-center pt-3">
                <Button
                  onClick={(e) => {
                    onFinishEvent?.(event.id);
                  }}
                  className="gap-2 shadow-lg rounded-full bg-[#d32f2f] px-6 py-2 text-xs font-bold text-white hover:bg-[#b71c1c]"
                >
                  Terminar Alerta
                  <FaFlag className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ClientEvent;