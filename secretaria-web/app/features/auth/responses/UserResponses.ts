export interface LoginDriverResponse {
  id: string,
  name: string,
  email: string,
  role: "DRIVER",
  phone: string,
  status: "ONLINE" | "OFFLINE",
  createdAt: Date,
  vehicle: {
    id: string,
    plate: string,
    latitude: number,
    longitude: number,
    driverId: string
  }
}

export interface LoginAttendantResponse {
  id: string,
  name: string,
  email: string,
  role: "ATTENDANT",
  phone: string,
  status: "ONLINE" | "OFFLINE",
  createdAt: Date
}