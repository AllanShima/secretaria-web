import { User } from "./User";
import { Vehicle } from "./Vehicle";

export interface Event {
  id: string;
  code: string;
  severity: "critical" | "urgent" | "moderate";
  address: string;
  description: string;          // O que aconteceu
  injuryLocations: string[];    // Locais de lesões
  createdByUser: User;          // Atendente que registrou
  status: "Em Andamento" | "Não Iniciado" | "Finalizado";
  operatorUser?: User;          // Telefonista
  assignedVehicle?: Vehicle;    // Socorrista / Veículo
  createdAt: Date;

  // Adicionais (opcionais)
  hospitalToReturn?: string;
  consciousnessAndBreathing?: string;
  bleeding?: boolean;
  approximateAge?: number;
  quantity?: number;
  cause?: string;
}