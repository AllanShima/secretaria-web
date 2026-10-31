export interface CreateAttendantRequest {
  name: string,
  email: string,
  password: string,
  phone: string
}

export interface CreateDriverRequest {
  name: string,
  email: string,
  password: string,
  phone: string,
  vehicle: {
    plate: string,
    latitude: number,
    longitude: number
  }
}

export interface LoginDriverRequest {
  email: string,
  password: string,
  latitude: number,
  longitude: number
}

export interface LoginAttendantRequest {
  email: string,
  password: string
}

export interface LogoutAttendantRequest {
  id: string
}

export interface ChangeDriverStatusRequest {
  status: "OFFLINE" | "ONLINE"
}