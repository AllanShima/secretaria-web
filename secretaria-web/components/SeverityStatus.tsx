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
        "critical": ["Crítico", "border-[#ee3636] bg-[#301b1b] text-[#ff1c1c]"],
        "urgent": ["Urgente", "border-[#eedd37] bg-[#302e1b] text-[#ffe91b]"],
        "moderate": ["Moderado", "border-[#369dee] bg-[#1b2730] text-[#1a82ff]"]
    }
    
    const [label, style] = statusHandler[status]

    return (
        <Badge variant={"outline"} className={`rounded-sm ${style}`}>
            {label}
        </Badge>
    )
}

export default SeverityStatus
