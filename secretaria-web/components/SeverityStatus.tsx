import React from 'react'
import { Badge } from './ui/badge'

interface SevStatusProps {
    status: String
}

const SeverityStatus = ({status} : SevStatusProps) => {
    const statusHandler = {
        "critical": ["Crítico", ""],
        "urgent": ["Urgente", ""],
        "moderate": ["Moderado", ""]
    }
    
    return (
        Badge
    )
}

export default SeverityStatus
