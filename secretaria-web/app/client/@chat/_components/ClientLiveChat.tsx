"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineChat, MdSend } from "react-icons/md";
import { BaseUser } from "@/app/features/auth/types/User";
import { toast } from "@/components/ui/toast";
import AdminItem from "./AdminItem";
import { createMessage, getConversations } from "@/app/features/client/api/chatApi";
import { ConversationsRequest, CreateMessageRequest } from "@/app/features/client/requests.ts/ChatRequests";
import { Message } from "@/app/features/client/types/Chat";
import LoadingPage from "@/components/LoadingPage";
import { useAuth } from "@/app/features/auth/api/AuthContext";
import { ConversationsResponse } from "@/app/features/client/api/responses/ChatResponses";

interface LiveChatWindowProps {
  users: BaseUser[],
  selectedUser: BaseUser,
  setSelectedUser: Dispatch<SetStateAction<BaseUser | null>>
}

const LiveChatWindow = ({ users, selectedUser, setSelectedUser }: LiveChatWindowProps) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Busca as mensagens sempre que o atendente selecionado ou o usuário mudar
  useEffect(() => {
    const loadMessages = async (isInitial = false) => {
      if (!selectedUser?.id || !user?.id) return;

      try {
        // Só mostra a tela de carregamento na primeira vez que entra/muda de usuário
        if (isInitial) {
          setIsLoading(true);
        }

        const paramsOpposite: ConversationsRequest = {
          attendantId: selectedUser.id,
          driverId: user.id,
        };
        const paramsMine: ConversationsRequest = {
          attendantId: user.id,
          driverId: selectedUser.id,
        };

        const msgsOpposite: ConversationsResponse | null = await getConversations(paramsOpposite);
        const msgsMine: ConversationsResponse | null = await getConversations(paramsMine);

        if (msgsOpposite || msgsMine) {
          const combinedMessages = [
            ...(msgsOpposite?.messages || []),
            ...(msgsMine?.messages || [])
          ];

          // Ordena as mensagens por data de envio (sentAt)
          combinedMessages.sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());

          setMessages(combinedMessages);
        } else {
          setMessages([]);
        }
      } catch (error) {
        toast.add({
          type: "error",
          description: String(error),
        });
      } finally {
        if (isInitial) {
          setIsLoading(false);
        }
      }
    };

    // 1. Carrega imediatamente ao abrir/mudar de usuário (com loading)
    loadMessages(true);

    // 2. Configura o intervalo para buscar novas mensagens a cada 5 segundos (sem loading na tela)
    const intervalId = setInterval(() => {
      loadMessages(false);
    }, 5000);

    // 3. Limpa o intervalo quando o usuário fecha o chat ou muda de contato
    return () => clearInterval(intervalId);
  }, [selectedUser, user?.id]);

  const handleMessage = async () => {
    try {
      if (!message.trim()) {
        throw new Error("Mensagem vazia!");
      }

      if (!selectedUser?.id || !user?.id) return;

      const newMessage: CreateMessageRequest = {
        attendantId: selectedUser.id,
        driverId: user.id,          // ID correto do motorista logado
        senderId: user.id,          // Quem envia é o motorista logado
        text: message.trim(),
      };

      const response = await createMessage(newMessage);
      if (response) {
        setMessages((prevMessages) => [...(prevMessages ?? []), response]);
        setMessage(""); // Limpa o campo de texto após enviar
      }
    } catch (error) {
      toast.add({
        type: "error",
        description: String(error),
      });
    }
  };

  const handleDoubleClick = async (phoneNumber: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      const id = toast.add({
        type: "info",
        description: "Telefone copiado!",
      });

      setTimeout(() => {
        toast.close(id);
      }, 2000);
    } catch (error) {
      console.error("Falha ao copiar texto: ", error);
      toast.add({
        type: "error",
        description: "Falha ao copiar o telefone!",
      });
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  const dataFormatada = messages?.[0]?.sentAt
    ? new Date(messages[0].sentAt).toLocaleDateString('pt-BR')
    : "Data não fornecida";

  return (
    <div className="flex h-full w-full overflow-hidden rounded-2xl bg-[#131924] text-white shadow-xl">
      {/* Sidebar - Lista de Conversas */}
      <div className="flex w-fit flex-col border-r border-[#262c3a] bg-[#161c28]">
        <div className="flex h-16 items-center justify-center gap-2 border-b border-[#262c3a] bg-white px-6 text-black">
          <MdOutlineChat className="h-5 w-5" />
          <span className="font-medium text-sm">Conversas</span>
        </div>

        {(!users || users.length === 0 || !selectedUser) ? (
          <div className="flex items-center justify-center text-white/70 p-4">
            <p>Nenhum atendente disponível.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {users.map((u, index) => (
              <div key={index} onDoubleClick={() => handleDoubleClick(u.phone)} onClick={() => setSelectedUser(u)}>
                <AdminItem user={u} isSelected={u.id === selectedUser.id} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      {(!users || users.length === 0 || !selectedUser) ? (
        <div className="flex h-full items-center justify-center text-white/70 w-full">
          <p>Nenhum atendente selecionado.</p>
        </div>
      ) : (
        <div className="flex flex-1 flex-col h-full">
          {/* Header do Chat Ativo */}
          <div className="flex h-16 items-center justify-center border-b border-[#262c3a] bg-white px-6 text-black">
            <span className="font-medium text-sm">
              {selectedUser?.name} - {selectedUser?.phone}
            </span>
          </div>

          {/* Área de Mensagens */}
          {(!messages || messages.length === 0) ? (
            <div className="flex flex-1 items-center justify-center text-white/70">
              <p>Nenhuma mensagem encontrada...</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex justify-center">
                <span className="text-xs text-white/50">--- {dataFormatada} ---</span>
              </div>

              {messages.map((msg) => {
                const isMe = msg.senderId === user?.id;
                return (
                  <div
                    key={msg.id}
                    className={`flex w-full ${isMe ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-md rounded-xl p-3 text-sm leading-relaxed ${isMe
                        ? "bg-[#168331] text-white"
                        : "border border-[#8f2d3a] bg-[#1a1c29] text-white"
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer - Input de Envio de Mensagem */}
          <div className="p-4 bg-[#181e2a]">
            <div className="flex items-center gap-3">
              <div className="flex-1 rounded-xl border border-[#2d3545] bg-[#161c28]">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva uma mensagem aqui..."
                  className="min-h-[50px] max-h-[100px] w-full resize-none border-none bg-transparent p-3 text-sm text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                size="icon"
                className="h-12 w-12 rounded-xl bg-[#ce3434] hover:bg-[#b02828] text-white transition-colors"
                onClick={handleMessage}
              >
                <MdSend className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChatWindow;