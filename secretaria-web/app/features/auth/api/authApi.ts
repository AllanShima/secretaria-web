import { apiFetch } from "@/lib/apiClient";
import { BaseUser, User } from "../types/User";
import { ChangeDriverStatusRequest, CreateAttendantRequest, CreateDriverRequest, LoginAttendantRequest, LoginDriverRequest, LogoutAttendantRequest } from "../requests/UsersRequests";

// ---------- Login

export async function loginAttendant(attendantLoginBody: LoginAttendantRequest) {
    return apiFetch('/attendants/login', {
        method: 'POST',
        body: JSON.stringify(attendantLoginBody),
    });
}

export async function loginDriver(driverLoginBody: LoginDriverRequest) {
    return apiFetch('/drivers/login', {
        method: 'POST',
        body: JSON.stringify(driverLoginBody),
    });
}

// ---------- Logout

export async function logoutAttendant(attendantLogoutBody: LogoutAttendantRequest) {
    return apiFetch('/attendants/logout', {
        method: 'POST',
        body: JSON.stringify(attendantLogoutBody),
    });
}

// ---------- GetAll
export async function getDrivers(): Promise<BaseUser[]> {
    return (await apiFetch<BaseUser[]>('/drivers/', { method: 'GET' })) ?? [];
}

export async function getAttendants(): Promise<BaseUser[]> {
    return (await apiFetch<BaseUser[]>('/attendants/', { method: 'GET' })) ?? [];
}

// ---------- GetById

export async function getAttendantById(id: string): Promise<BaseUser | null> {
    return apiFetch<BaseUser>(`/attendants/${id}`);
}

export async function getDriverById(id: string): Promise<BaseUser | null> {
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

// ----------- PATCH

export async function changeDriverStatus(id: string, driverBody: ChangeDriverStatusRequest) {
    return apiFetch(`/drivers/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify(driverBody),
    });
}