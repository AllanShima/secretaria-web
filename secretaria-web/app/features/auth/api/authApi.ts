import { apiFetch } from "@/lib/apiClient";
import { User } from "../types/User";


export async function getUsers(): Promise<User[]> {
    // Substitua '/events' pela rota exata da sua API backend
    return apiFetch<User[]>('/events'); 
}

export async function createEventInDatabase(eventData: Partial<User>) {
    return apiFetch('/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
    });
}