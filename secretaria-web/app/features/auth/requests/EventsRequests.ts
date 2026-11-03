export interface CreateEventRequest {
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
  driverId: string
}

export interface UpdateEventRequest {
  returnLocation: string,
  whatHappened: string,
  injuryCondition: string,
  observations: string
}