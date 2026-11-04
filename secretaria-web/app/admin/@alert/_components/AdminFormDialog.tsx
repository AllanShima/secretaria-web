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
import { CiSearch } from 'react-icons/ci'

type AdminFormState = {
    returnLocation: string
    whatHappened: string
    injuryCondition: string
    observations: string
}

interface AdminFormProps {
    event: Event
}

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

    const handleSearchAddress = async () => {
        if (form.returnLocation !== "") {
            const coordinates = await searchCoordenateFromAddress(form.returnLocation);
            setLocationCoords(coordinates ? [[coordinates.lat, coordinates.lng]] : []);
        } else {
            toast.add({
                type: "error",
                description: "Digite um endereço!",
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

                    {/* Endereço de Retorno + Mapa */}
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-zinc-300">
                            Endereço de Retorno / Destino
                        </Label>
                        <div className='relative flex flex-col w-full h-[280px] justify-end items-center overflow-hidden rounded-2xl border border-white/10'>
                            <div className='flex w-full items-center bg-[#1c2330] rounded-t-xl overflow-hidden border-b border-zinc-700 z-10'>
                                <Input
                                    value={form.returnLocation}
                                    onChange={(e) => setField("returnLocation", e.target.value)}
                                    placeholder='Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP'
                                    className='dark text-white bg-transparent transition rounded-none border-none h-12 flex-1 px-4 focus-visible:ring-0 focus-visible:ring-offset-0'
                                />          
                                
                                <button 
                                    onClick={handleSearchAddress}
                                    type='button' 
                                    className='flex items-center justify-center w-12 h-12 bg-transparent hover:bg-white/10 text-white transition-colors shrink-0'
                                >
                                    <CiSearch className='w-5 h-5'/>
                                </button>
                            </div>
                            <div className='z-0 flex w-full h-full rounded-b-2xl'>
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