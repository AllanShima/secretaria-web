import { machine } from "os";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

export interface Event {
  id: string,
  protocol: string,
  address: string,
  returnLocation: string,
  whatHappened: string,
  patientCondition: string,
  apparentAge: number,
  patientCount: number,
  injuryCondition: string,
  observations: string,
  attendantId: string,
  createdAt: Date,
  vehicles: [
    {
      vehicleId: string,
      status: string
    }
  ]
}

interface Vehicles {
  
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

