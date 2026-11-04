import { apiFetch } from "@/lib/apiClient";
import { ConversationsRequest, CreateMessageRequest } from "../requests.ts/ChatRequests";
import { ConversationsResponse } from "./responses/ChatResponses";
import { Message } from "../types/Chat";

// -------- GET

export async function getConversations(params: ConversationsRequest) {
    const queryParams = new URLSearchParams({
        attendantId: params.attendantId.toString(),
        driverId: params.driverId.toString(),
    });

    return apiFetch<ConversationsResponse>(`/conversations/?${queryParams.toString()}`, {
        method: 'GET',
    });
}

// -------- POST

export async function createMessage(messageBody: CreateMessageRequest) {
    return apiFetch<Message>('/conversations/messages', {
        method: 'POST',
        body: JSON.stringify(messageBody),
    });
}
