export interface Message {
    id: string,
    text: string,
    sentAt: Date,
    senderId: string,
    conversationId: string
}