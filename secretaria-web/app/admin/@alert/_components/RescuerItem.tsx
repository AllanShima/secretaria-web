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
    const status = user.status == false ? "Offline" : "Online";
    const statusStyle = user.status == false ? "bg-[#4c1f1f] border-red-600 text-red-500" : "bg-[#1f4c2a] border-[#1c7f2a] text-green-500"
    return (
        <Toggle disabled={user.status === false} aria-label="Toggle bookmark" size="sm" variant="outline" className={"flex w-full h-20 hover:bg-[#301b1b]/50 data-[pressed]:border-[#7f1c1c] transition-all data-[pressed]:bg-[#301b1b] items-center border-[#30363d] justify-between bg-[#1c2330] p-3 rounded-xl"}>
            <span className='flex items-center justify-start gap-3'>
                <Avatar className={"flex size-14 p-3 justify-center items-center text-[#25c345] border-[#25c345] bg-[#1f4c2a] rounded-lg"}>
                    <BiSolidAmbulance className="size-full" />
                </Avatar>
                <div className="flex flex-col gap-2 justify-center items-start">
                    <h3 className="font-medium text-white text-sm">{user.name}</h3>
                    <p className="font-light text-white/20 text-xs">TEL - {user.phoneNumber}</p>
                </div>                
            </span>

            <div className='flex items-center h-full w-fit'>
                <Badge className={`py-3 px-3 rounded-sm ${statusStyle}`}>
                    {status}
                </Badge>
            </div>      
        </Toggle>

    )
}

export default RescuerItem
