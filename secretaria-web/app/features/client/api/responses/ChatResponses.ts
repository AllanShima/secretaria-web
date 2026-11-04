import { Message } from "../../types/Chat";

export interface ConversationsResponse {
  id: "c9b08c2d-deae-463e-bacd-e74abadbbb3b",
  attendantId: string,
  driverId: string,
  messages: Message[]
}

export interface CreateMessageResponse {
  id: string,
  text: string,
  sentAt: "2026-11-03T21:09:56.659Z",
  senderId: "51fcccbb-6ef5-4d6e-9f66-09fef90dfe61",
  conversationId: "7f7b437d-fb7b-498f-876e-7ad63005ead8"
}