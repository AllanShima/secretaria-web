export interface CreateEventResponse {
  id: string,
  protocol: string,
  address: string,
  returnLocation: string,
  whatHappened: string,
  patientCondition: string,
  apparentAge: number,
  patientCount: number,
  injuryCondition: string,
  observations: string,
  attendantId: string,
  createdAt: Date
}

export interface ConcludeEventResponse {
  count: number
}

export interface LocationEventResponse {
  latitude: number,
  longitude: number
}