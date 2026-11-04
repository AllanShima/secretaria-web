export interface ConversationsRequest {
    attendantId: string;
    driverId: string;
}

export interface CreateMessageRequest {
  attendantId: string,
  driverId: string,
  senderId: string,
  text: string
}