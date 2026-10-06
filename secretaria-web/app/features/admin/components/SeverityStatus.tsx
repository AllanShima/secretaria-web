import React from 'react'
import { Badge } from '@/components/ui/badge';

interface SevStatusProps {
    status: string
}

const SeverityStatus = ({status} : SevStatusProps) => {
    // Record é um tipo proprio do typescript 

    // // Standard index signature:
    // const statusHandler: { [key in "critical" | "urgent" | "moderate"]: [string, string] } = { ... };

    // // Clean Record syntax:
    // const statusHandler: Record<"critical" | "urgent" | "moderate", [string, string]> = { ... };

    const statusHandler: Record<string, [string, string]> = {
        "critical": ["Crítico", "border-[#ee3636]/70 bg-[#301b1b]/70 text-[#ff1c1c]/70"],
        "urgent": ["Urgente", "border-[#eedd37]/70 bg-[#302e1b]/70 text-[#ffe91b]/70"],
        "moderate": ["Moderado", "border-[#369dee]/70 bg-[#1b2730]/70 text-[#1a82ff]/70"]
    }
    
    const [label, style] = statusHandler[status]

    return (
        <Badge variant={"outline"} className={`flex px-4 py-3 rounded-sm ${style}`}>
            {label}
        </Badge>
    )
}

export default SeverityStatus
