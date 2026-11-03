'use client'
import { updateEventById } from '@/app/features/admin/api/adminApi'
import { UpdateEventRequest } from '@/app/features/auth/requests/EventsRequests'
import { Event } from '@/app/features/auth/types/Event'
import { searchCoordenateFromAddress } from '@/app/features/map/api/NominatimAPI'
import CustomMap from '@/app/features/map/components/CustomMap'
import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/toast'
import React, { useState } from 'react'
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

const AdminFormDialog = ({event}: AdminFormProps) => {
    const [locationCoords, setLocationCoords] = useState<[number, number][]>([]);

    const [form, setForm] = useState<AdminFormState>({
        returnLocation: "",
        whatHappened: "asd",
        injuryCondition: "asd",
        observations: "asd"
    });

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
            })
        }
    }

    const handleUpdateInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const eventBody: UpdateEventRequest = {
                returnLocation: form.returnLocation,
                whatHappened: form.whatHappened,
                injuryCondition: form.injuryCondition,
                observations: form.observations,
            }
            await updateEventById(event.id, eventBody)
            toast.add({
                type: "success",
                description: "Informações atualizadas!",
                priority: "high",
            })
        } catch (error) {
            toast.add({
                type: "error",
                description: String(error),
                priority: "high",
            })
        }
    }

    return (
        <DialogContent className="flex flex-col w-full sm:max-w-2xl dark">
            <form onSubmit={handleUpdateInfo} className="flex flex-col gap-4">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>

                {/* Body Content */}
                <div className="flex flex-col w-full justify-center items-center gap-4">
                    <div className='relative flex flex-col w-full h-[350px] justify-end items-center overflow-hidden rounded-2xl border border-white/10'>
                        <div className='flex w-full items-center bg-[#1c2330] rounded-lg rounded-b-none overflow-hidden border border-zinc-700'>
                            <Input
                            value={form.returnLocation}
                            onChange={(e) => setField("returnLocation", e.target.value)}
                            placeholder='Ex: Av. Brasil, 1500, Apto 42, Centro, Marília - SP'
                            className='dark text-white bg-transparent transition rounded-none border-zinc-700 h-12 flex-1 px-5'
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

                <DialogFooter className="sm:justify-start">
                    <DialogClose>
                        <Button type="button" variant="secondary">Close</Button>
                    </DialogClose>
                    <Button variant="outline" type="submit">
                        Atualizar Informações
                    </Button>            
                </DialogFooter>
            </form>
        </DialogContent>
    )
}

export default AdminFormDialog