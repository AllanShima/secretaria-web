export interface User {
    id?: string;
    name: string;
    email: string;
    password?: string; // Opcional dependendo de onde for usada (ex: frontend)
    phoneNumber: string;
    type: "Admin" | "Client";
    status: boolean;
    createdAt?: Date;
}