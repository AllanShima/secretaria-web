import { apiFetch } from "@/lib/apiClient";
import { CreateEventRequest } from "../../auth/requests/EventsRequests";
import { ConcludeEventResponse, CreateEventResponse, LocationEventResponse } from "../../auth/responses/EventsResponses";
import { Event } from "../../auth/types/Event";
import { Notification } from "../../auth/types/Notification";

// ---------- GetAll
export async function getEvents(): Promise<Event[]> {
    return (await apiFetch<Event[]>('/emergency-calls/', { method: 'GET' })) ?? [];
}

// ---------- GetById

export async function getEventById(id: string): Promise<Event | null> {
    return apiFetch<Event>(`/emergency-calls/${id}`);
}

export async function getNotificationsByEventId(id: string): Promise<Notification[] | null> {
    return apiFetch<Notification[]>(`/emergency-calls/${id}/notifications`);
}

export async function getEventLocationById(id: string): Promise<LocationEventResponse | null> {
    return apiFetch<LocationEventResponse>(`/emergency-calls/get_location?id=${id}`);
}


// ---------- POST

export async function createEvent(eventBody: CreateEventRequest) {
    return apiFetch<CreateEventResponse>(`/emergency-calls/`, {
        method: 'POST',
        body: JSON.stringify(eventBody),
    });
}

// ----------- PATCH

export async function concludeEvent(id: string): Promise<ConcludeEventResponse | null> {
    return apiFetch<ConcludeEventResponse>(`/emergency-calls/${id}/conclude`, {
        method: 'PATCH'
    });
}