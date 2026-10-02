import { User } from '@/app/features/auth/types/User';
import { Avatar } from '@/components/ui/avatar';
import React from 'react'
import { MdOutlineLocalPhone } from 'react-icons/md';

interface AdminItemProp {
    user: User;
    isSelected: boolean;
}

const AdminItem = ({user, isSelected}: AdminItemProp) => {

    return (
        <div className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors ${isSelected
            ? "border-[#76314a] bg-[#3a1d28]" // Borda e fundo avermelhado da seleção
            : "border-[#262c3a] bg-[#1c2331] hover:bg-[#232b3c]"
        }`}
        >
            <Avatar className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <MdOutlineLocalPhone className="h-5 w-5" />
            </Avatar>

            <div className="flex flex-col overflow-hidden">
                <h4 className="truncate font-medium text-sm text-white">
                    {user.name}
                </h4>
                <p className="truncate text-xs text-white/40">
                    TEL - {user.phoneNumber}
                </p>
            </div>
        </div>
    );
}

export default AdminItem
