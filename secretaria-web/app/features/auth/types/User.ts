import { get } from "http";

export interface User {
    id?: string;
    name: string;
    email: string;
    address: string;
    password?: string; // Opcional dependendo de onde for usada (ex: frontend)
    phoneNumber: string;
    type: "Admin" | "Client";
    status: boolean;
    createdAt?: Date;
}

// {
//   "id": "06351f02-5052-48a1-9ca4-c148e2eacc8a",
//   "email": "allanshima@gmail.com",
//   "password": "$2b$10$NqbbWYNmZmUCWt1DU1ueDuiLCJspojyKNkTnvKGcJZL86vgUED642",
//   "role": "ATTENDANT",
//   "phone": "14981826224",
//   "status": "OFFLINE",
//   "createdAt": "2026-10-26T02:16:44.012Z"
// }
