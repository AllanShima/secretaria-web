import { apiFetch } from "@/lib/apiClient";
import { BaseUser, User } from "../types/User";
import { CreateAttendantRequest, CreateDriverRequest } from "../requests/UsersRequests";

// GetAll
export async function getDrivers(): Promise<BaseUser[]> {
    return apiFetch<BaseUser[]>('/drivers/', { method: 'GET' }); 
}

// ----------
// GetById

export async function getAttendantById(id: string): Promise<BaseUser> {
    return apiFetch<BaseUser>(`/attendants/${id}`);
}

export async function getDriverById(id: string): Promise<BaseUser> {
    return apiFetch<BaseUser>(`/drivers/${id}`);
}

// ----------- POST

export async function createAttendant(attendantBody: CreateAttendantRequest) {
    return apiFetch('/attendants/', {
        method: 'POST',
        body: JSON.stringify(attendantBody),
    });
}

export async function createDriver(driverBody: CreateDriverRequest) {
    return apiFetch('/drivers/', {
        method: 'POST',
        body: JSON.stringify(driverBody),
    });
}