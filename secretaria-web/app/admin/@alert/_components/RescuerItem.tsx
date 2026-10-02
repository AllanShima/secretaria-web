import React from 'react'
import SeverityStatus from '@/app/features/admin/components/SeverityStatus'
import { Button } from '@/components/ui/button'
import { IoMdSend } from 'react-icons/io'
import { LuDot } from 'react-icons/lu'
import { Avatar } from '@/components/ui/avatar'
import { MdOutlineLocalPhone } from 'react-icons/md'
import { Badge } from '@/components/ui/badge'
import { BiSolidAmbulance } from "react-icons/bi";
import { Toggle } from '@/components/ui/toggle'
import { User } from '@/app/features/auth/types/User'

interface RescuerItemProp {
    user: User
}

const RescuerItem = ({user}: RescuerItemProp) => {
    return (
        <Toggle aria-label="Toggle bookmark" size="sm" variant="outline" className={"flex w-full h-20 items-center justify-between bg-[#1c2330] p-3 rounded-xl"}>
            <span className='flex items-center justify-start gap-3'>
                <Avatar className={"flex size-14 p-3 justify-center items-center text-[#25c345] border-[#25c345] bg-[#1f4c2a] rounded-lg"}>
                    <BiSolidAmbulance className="size-full" />
                </Avatar>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-white text-sm">Ana Beatriz Costa</h3>
                    <p className="font-light text-white/20 text-xs">TEL - 14 98182 6224</p>
                </div>                
            </span>

            <div className='flex items-center h-full w-fit'>
                <Badge variant="destructive" className='py-3 px-3 rounded-sm border-red-600'>
                    {user.status}
                </Badge>
            </div>      
        </Toggle>

    )
}

export default RescuerItem
