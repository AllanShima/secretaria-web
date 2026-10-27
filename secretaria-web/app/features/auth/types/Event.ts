import { machine } from "os";
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
  operatorUser?: User[];          // Telefonista
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

// Emergency call ID
// {
//   "id": "9c470a05-a62f-4023-bde7-8e888764e958",
//   "protocol": "234",
//   "address": "string",
//   "returnLocation": "string",
//   "whatHappened": "string",
//   "patientCondition": "string",
//   "apparentAge": 12,
//   "patientCount": 2,
//   "injuryCondition": "string",
//   "observations": "string",
//   "attendantId": "06351f02-5052-48a1-9ca4-c148e2eacc8a",
//   "createdAt": "2026-10-26T03:00:46.862Z",
//   "vehicles": [
//     {
//       "vehicleId": "80b9b3cb-3e31-4189-bc60-728ac76b6784",
//       "status": "NOT_STARTED"
//     }
//   ]
// }

// O que retorna quando faz post
// {
//   "id": "9c470a05-a62f-4023-bde7-8e888764e958",
//   "protocol": "234",
//   "address": "string",
//   "returnLocation": "string",
//   "whatHappened": "string",
//   "patientCondition": "string",
//   "apparentAge": 12,
//   "patientCount": 2,
//   "injuryCondition": "string",
//   "observations": "string",
//   "attendantId": "06351f02-5052-48a1-9ca4-c148e2eacc8a",
//   "createdAt": "2026-10-26T03:00:46.862Z"
// }

