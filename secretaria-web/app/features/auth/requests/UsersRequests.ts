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