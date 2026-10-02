import SeverityStatus from '@/app/features/admin/components/SeverityStatus'
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import React from 'react'
import { IoMdSend } from 'react-icons/io'
import { LuDot } from 'react-icons/lu'

const AlertItem = () => {
    return (
        <Item className='bg-[#1c2330]/80'>
            <ItemContent className='gap-2'>
                <ItemTitle className='gap-2'>
                    <SeverityStatus status="critical" />
                    <p className='text-xs font-semibold'>
                        3s atrás
                    </p>
                </ItemTitle>
                <ItemDescription className='flex flex-col gap-5'>
                    <p>
                        Av. Brasil, 1500, Apto 42, Centro, Marília - SP
                    </p>
                </ItemDescription>
                <ItemDescription className='flex w-fit text-[10px] font-semibold justify-center items-center'>
                    <p>
                        Código: AL-0001
                    </p>
                    <LuDot />
                    <p>
                        Ativo
                    </p>
                </ItemDescription>
            </ItemContent>
            <ItemActions>
                <Button variant="destructive" size="sm">
                    <IoMdSend />
                </Button>
            </ItemActions>
        </Item>
    )
}

export default AlertItem
