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

// Attendant
// {
//   "id": "06351f02-5052-48a1-9ca4-c148e2eacc8a",
//   "email": "allanshima@gmail.com",
//   "password": "$2b$10$NqbbWYNmZmUCWt1DU1ueDuiLCJspojyKNkTnvKGcJZL86vgUED642",
//   "role": "ATTENDANT",
//   "phone": "14981826224",
//   "status": "OFFLINE",
//   "createdAt": "2026-10-26T02:16:44.012Z"
// }

// Driver:
// {
//   "id": "53211f20-b77d-4ce7-aacc-f46d5b94de11",
//   "email": "allanshimabelo@gmail,com",
//   "password": "$2b$10$9.Judq3Gc.H9ajTpUJMr6.J5DawRtr3n/IQTduWu/IaKtH3yh07x2",
//   "role": "DRIVER",
//   "phone": "14981606044",
//   "status": "OFFLINE",
//   "createdAt": "2026-10-26T02:52:38.726Z"
// }

// {
//   "id": "53211f20-b77d-4ce7-aacc-f46d5b94de11",
//   "email": "allanshimabelo@gmail,com",
//   "role": "DRIVER",
//   "phone": "14981606044",
//   "status": "OFFLINE",
//   "createdAt": "2026-10-26T02:52:38.726Z",
//   "vehicle": {
//     "id": "80b9b3cb-3e31-4189-bc60-728ac76b6784",
//     "plate": "abcdefg",
//     "latitude": 0,
//     "longitude": 0,
//     "driverId": "53211f20-b77d-4ce7-aacc-f46d5b94de11"
//   }
// }