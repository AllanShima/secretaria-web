'use client'
import { updateEventById } from '@/app/features/admin/api/adminApi'
import { UpdateEventRequest } from '@/app/features/auth/requests/EventsRequests'
import { Event } from '@/app/features/auth/types/Event'
import { searchCoordenateFromAddress } from '@/app/features/client/api/NominatimAPI'
import CustomMap from '@/app/features/client/components/CustomMap'
import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/toast'
import React, { useState, useEffect } from 'react'

type AdminFormState = {
    returnLocation: string
    whatHappened: string
    injuryCondition: string
    observations: string
}

interface AdminFormProps {
    event: Event
}

const PREDEFINED_LOCATIONS = [
    "Santa Casa de Marília, SP",
    "Hospital das Clínicas, Marília, SP",
    "USF Parque das Nações, Marília, SP"
]

const AdminFormDialog = ({ event }: AdminFormProps) => {
    const [locationCoords, setLocationCoords] = useState<[number, number][]>([]);

    const [form, setForm] = useState<AdminFormState>({
        returnLocation: event?.returnLocation || "",
        whatHappened: event?.whatHappened || "",
        injuryCondition: event?.injuryCondition || "",
        observations: event?.observations || ""
    });

    // Atualiza o formulário se as props da prop 'event' mudarem
    useEffect(() => {
        if (event) {
            setForm({
                returnLocation: event.returnLocation || "",
                whatHappened: event.whatHappened || "",
                injuryCondition: event.injuryCondition || "",
                observations: event.observations || ""
            });

            // Se o evento já tiver um local de retorno salvo, busca as coordenadas iniciais para o mapa
            if (event.returnLocation) {
                searchCoordenateFromAddress(event.returnLocation).then(coords => {
                    if (coords) setLocationCoords([[coords.lat, coords.lng]]);
                });
            }
        }
    }, [event]);

    function setField<K extends keyof AdminFormState>(key: K, value: AdminFormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    // Função para selecionar a localização pelos botões e atualizar o mapa instantaneamente
    const handleSelectLocation = async (address: string) => {
        setField("returnLocation", address);
        const coordinates = await searchCoordenateFromAddress(address);
        if (coordinates) {
            setLocationCoords([[coordinates.lat, coordinates.lng]]);
        } else {
            setLocationCoords([]);
            toast.add({
                type: "error",
                description: "Não foi possível encontrar as coordenadas para este endereço.",
                priority: "high",
            });
        }
    }

    const handleUpdateInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const eventBody: UpdateEventRequest = {
                returnLocation: form.returnLocation != "" ? form.returnLocation : "[Ainda não informado]",
                whatHappened: form.whatHappened != "" ? form.whatHappened : "[Ainda não informado]",
                injuryCondition: form.injuryCondition != "" ? form.injuryCondition : "[Ainda não informado]",
                observations: form.observations != "" ? form.observations : "[Ainda não informado]",
            };
            await updateEventById(event.id, eventBody);
            toast.add({
                type: "success",
                description: "Informações atualizadas com sucesso!",
                priority: "high",
            });
        } catch (error) {
            toast.add({
                type: "error",
                description: String(error),
                priority: "high",
            });
        }
    }

    return (
        <DialogContent className="flex flex-col w-full sm:max-w-2xl dark max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleUpdateInfo} className="flex flex-col gap-5">
                <DialogHeader>
                    <DialogTitle>Atualizar Evento</DialogTitle>
                    <DialogDescription>
                        Preencha e edite os dados do atendimento abaixo.
                    </DialogDescription>
                </DialogHeader>

                {/* Body Content */}
                <div className="flex flex-col w-full gap-4">

                    {/* Endereço de Retorno + Seleção por Botões + Mapa */}
                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-medium text-zinc-300">
                            Endereço de Retorno / Destino
                        </Label>

                        {/* Grade com os 3 botões de locais */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {PREDEFINED_LOCATIONS.map((loc) => {
                                const isSelected = form.returnLocation === loc;
                                return (
                                    <Button
                                        key={loc}
                                        type="button"
                                        onClick={() => handleSelectLocation(loc)}
                                        className={`text-xs h-auto py-2.5 px-3 text-left justify-start whitespace-normal transition-all ${
                                            isSelected
                                                ? "bg-blue-600 hover:bg-blue-700 text-white border border-blue-400 shadow-md"
                                                : "bg-[#1c2330] hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
                                        }`}
                                    >
                                        {loc}
                                    </Button>
                                );
                            })}
                        </div>

                        {/* Mapa exibindo a localização selecionada */}
                        <div className='relative flex flex-col w-full h-[240px] justify-end items-center overflow-hidden rounded-2xl border border-white/10 mt-1'>
                            <div className='z-0 flex w-full h-full rounded-2xl'>
                                <CustomMap routeCords={locationCoords} />
                            </div>
                        </div>
                    </div>

                    {/* O que aconteceu & Condições dos Feridos (Grid 2 colunas) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="whatHappened" className="text-sm font-medium text-zinc-300">
                                O que aconteceu
                            </Label>
                            <Input
                                id="whatHappened"
                                value={form.whatHappened}
                                onChange={(e) => setField("whatHappened", e.target.value)}
                                placeholder="Descreva a ocorrência..."
                                className="bg-[#1c2330] border-zinc-700 text-white h-10"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="injuryCondition" className="text-sm font-medium text-zinc-300">
                                Estado dos feridos / Vítimas
                            </Label>
                            <Input
                                id="injuryCondition"
                                value={form.injuryCondition}
                                onChange={(e) => setField("injuryCondition", e.target.value)}
                                placeholder="Ex: Consciente, ferimentos leves..."
                                className="bg-[#1c2330] border-zinc-700 text-white h-10"
                            />
                        </div>
                    </div>

                    {/* Observações gerais */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="observations" className="text-sm font-medium text-zinc-300">
                            Observações Adicionais
                        </Label>
                        <textarea
                            id="observations"
                            rows={3}
                            value={form.observations}
                            onChange={(e) => setField("observations", e.target.value)}
                            placeholder="Insira notas extras sobre o alerta..."
                            className="w-full rounded-md bg-[#1c2330] border border-zinc-700 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 resize-none"
                        />
                    </div>

                </div>

                <DialogFooter className="sm:justify-end gap-2 pt-2">
                    <DialogClose>
                        <Button type="button" variant="secondary">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button variant="default" type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Atualizar Informações
                    </Button>            
                </DialogFooter>
            </form>
        </DialogContent>
    )
}

export default AdminFormDialog