import { apiFetch } from "@/lib/apiClient";
import { CreateEventRequest } from "../../auth/requests/EventsRequests";
import { CreateEventResponse } from "../../auth/responses/EventsResponses";
import { Event } from "../../auth/types/Event";

// ---------- GetAll
export async function getEvents(): Promise<Event[]> {
    return (await apiFetch<Event[]>('/emergency-calls/', { method: 'GET' })) ?? [];
}

// ---------- GetById

export async function getEventById(id: string): Promise<Event | null> {
    return apiFetch<Event>(`/emergency-calls/${id}`);
}

// ---------- POST

export async function createEvent(eventBody: CreateEventRequest) {
    return apiFetch<CreateEventResponse>(`/emergency-calls/`, {
        method: 'POST',
        body: JSON.stringify(eventBody),
    });
}