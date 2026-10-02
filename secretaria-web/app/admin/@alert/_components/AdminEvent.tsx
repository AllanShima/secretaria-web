import SeverityStatus from '@/app/features/admin/components/SeverityStatus'
import { Event } from '@/app/features/auth/types/Event'
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import React from 'react'
import { IoMdSend } from 'react-icons/io'
import { LuDot } from 'react-icons/lu'

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface AdminEventProp {
    event: Event
}

const AdminEvent = ({event}: AdminEventProp) => {
    // Exemplo: "há cerca de 2 horas" / "há 3 segundos"
    const timeAgo = formatDistanceToNow(event.createdAt, {
        addSuffix: true, // Adiciona o "há ..."
        locale: ptBR,
    });

    return (
        <Item className='bg-[#1c2330]/80'>
            <ItemContent className='gap-2'>
                <ItemTitle className='gap-2'>
                    <SeverityStatus status={event.severity} />
                    <p className='text-xs font-semibold'>
                        {timeAgo}
                    </p>
                </ItemTitle>
                <ItemDescription className='flex flex-col gap-5'>
                    <p>
                        {event.address}
                    </p>
                </ItemDescription>
                <ItemDescription className='flex w-fit text-[10px] font-semibold justify-center items-center'>
                    <p>
                        Código: {event.code}
                    </p>
                    <LuDot />
                    <p>
                        {event.status}
                    </p>
                </ItemDescription>
            </ItemContent>
            <ItemActions>
                {(event.status != "Finalizado") && (
                    <Button variant="destructive" size="sm">
                        <IoMdSend />
                    </Button>                    
                )}
            </ItemActions>
        </Item>
    )
}

export default AdminEvent
