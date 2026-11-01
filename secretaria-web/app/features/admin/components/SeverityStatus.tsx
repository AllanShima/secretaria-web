import React from 'react'
import { Badge } from '@/components/ui/badge';

interface SevStatusProps {
    status: string
}

const SeverityStatus = ({status} : SevStatusProps) => {
    const statusHandler: Record<string, [string, string]> = {
        "CRITICAL": ["Crítico", "border-[#ee3636]/70 bg-[#301b1b]/70 text-[#ff1c1c]/70"],
        "URGENT": ["Urgente", "border-[#eedd37]/70 bg-[#302e1b]/70 text-[#ffe91b]/70"],
        "MODERATE": ["Moderado", "border-[#369dee]/70 bg-[#1b2730]/70 text-[#1a82ff]/70"]
    }
    
    // 1. Converte para maiúsculo e garante segurança caso o status venha vazio/undefined
    const normalizedStatus = status ? status.toUpperCase() : "";

    // 2. Busca no dicionário ou usa um padrão caso não encontre
    const [label, style] = statusHandler[normalizedStatus] || [
        status || "Desconhecido", 
        "border-gray-500/70 bg-gray-800/70 text-gray-300/70"
    ];

    return (
        <Badge variant={"outline"} className={`flex px-2 py-1 rounded-sm ${style}`}>
            <p className='text-xs font-light'>
                {label}
            </p>
        </Badge>
    )
}

export default SeverityStatus