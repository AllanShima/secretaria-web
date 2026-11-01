'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { BiSolidAmbulance } from "react-icons/bi";
import { BaseUser, User } from '@/app/features/auth/types/User'
import { ToggleGroupItem } from '@/components/ui/toggle-group';

interface RescuerItemProp {
    client: BaseUser
    setClientSelected: Dispatch<SetStateAction<BaseUser | null>>,
    clientSelected: BaseUser | null
}

const ClientItem = ({client, setClientSelected, clientSelected}: RescuerItemProp) => {
    const status = client.status;
    const statusStyle = client.status == "OFFLINE" ? "bg-[#4c1f1f] border-red-600 text-red-500" : "bg-[#1f4c2a] border-[#1c7f2a] text-green-500"
    const isAlreadySelected = clientSelected?.id === client.id;

    return (
        <ToggleGroupItem
        onClick={() => {
            setClientSelected(isAlreadySelected ? null : client);
        }}
        value={client.id}
        disabled={client.status === "OFFLINE"} aria-label="Toggle bookmark" size="sm" variant="outline" 
        className={"flex w-full h-20 hover:bg-[#301b1b]/50 data-[pressed]:border-[#7f1c1c] transition-all data-[pressed]:bg-[#301b1b] items-center border-[#30363d] justify-between bg-[#1c2330] p-3 rounded-xl"}>
            <span className='flex items-center justify-start gap-3'>
                <Avatar className={"flex size-14 p-3 justify-center items-center text-[#25c345] border-[#25c345] bg-[#1f4c2a] rounded-lg"}>
                    <BiSolidAmbulance className="size-full" />
                </Avatar>
                <div className="flex flex-col gap-2 justify-center items-start">
                    <h3 className="font-medium text-white text-sm">{client.name}</h3>
                    <p className="font-light text-white/20 text-xs">TEL - {client.phone}</p>
                </div>                
            </span>

            <div className='flex items-center h-full w-fit'>
                <Badge className={`py-3 px-3 rounded-sm ${statusStyle}`}>
                    {status}
                </Badge>
            </div>      
        </ToggleGroupItem>
    )
}

export default ClientItem
