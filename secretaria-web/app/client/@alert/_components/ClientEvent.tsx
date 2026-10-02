"use client";

import React from "react";
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

interface ClientEventProps {
  event: Event;
  onFinishEvent?: (eventId: string) => void;
}

const ClientEvent = ({ event, onFinishEvent }: ClientEventProps) => {
  return (
    <Accordion className="w-full">
      <AccordionItem
        value={event.id}
        className="rounded-2xl border border-[#2a3447] bg-[#161f2d] transition-colors data-[state=open]:border-[#8b2222] data-[state=open]:bg-[#241318]"
      >
        {/* Cabeçalho do Card / Trigger do Accordion */}
        <AccordionTrigger className="p-4 hover:no-underline [&>svg]:hidden">
          <div className="flex w-full items-center justify-between gap-3">
            {/* Ícone de Localização e Informações Principais */}
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1c2e42] text-[#2980b9]">
                <IoLocationSharp className="h-6 w-6" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white/50">
                  Código: {event.code}
                </span>
                <h4 className="font-bold text-base text-white">
                  {event.address}
                </h4>
                <p className="text-sm text-white/70">
                  {event.createdByUser?.name ?? "Solicitante não informado"}
                </p>
              </div>
            </div>

            {/* Badge de Severidade */}
            <div className="shrink-0">
              <SeverityStatus status={event.severity} />
            </div>
          </div>
        </AccordionTrigger>

        {/* Conteúdo Expandido - Informações Adicionais */}
        <AccordionContent className="px-5 pb-5 pt-2 text-white">
          <div className="space-y-4">
            <h5 className="font-mono text-xs font-bold text-white/80">
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
                  onClick={() => onFinishEvent?.(event.id)}
                  className="gap-2 rounded-full bg-[#d32f2f] px-6 py-2 text-xs font-bold text-white hover:bg-[#b71c1c]"
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