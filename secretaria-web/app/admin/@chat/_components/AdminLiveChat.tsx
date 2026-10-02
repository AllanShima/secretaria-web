"use client";

import { useState } from "react";
import { BASE_USERS } from "@/app/features/auth/api/MockData";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineChat, MdOutlineLocalPhone, MdSend } from "react-icons/md";
import AdminItem from "@/app/client/@chat/_components/AdminItem";

// Mock de mensagens para demonstração
const MOCK_MESSAGES = [
  { id: 1, text: "Olá", sender: "user" },
  { id: 2, text: "Boa noite", sender: "me" },
  { id: 3, text: "Boa noite", sender: "user" },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "me",
  },
];

const LiveChatWindow = () => {
  const users = BASE_USERS;
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [message, setMessage] = useState("");

  const selectedUser = users[selectedUserIndex] ?? users[0];

  return (
    <div className="flex h-full w-full overflow-hidden rounded-2xl bg-[#131924] text-white shadow-xl">
      {/* Sidebar - Lista de Conversas */}
      <div className="flex w-50 flex-col border-r border-[#262c3a] bg-[#161c28]">
        {/* Header Sidebar */}
        <div className="flex h-16 items-center justify-center gap-2 border-b border-[#262c3a] bg-white px-6 text-black">
          <MdOutlineChat className="h-5 w-5" />
          <span className="font-medium text-sm">Conversas</span>
        </div>

        {/* Lista de Contatos */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {users.map((user, index) => (
            <div key={index} onClick={() => setSelectedUserIndex(index)}>
                <AdminItem user={user} isSelected={index === selectedUserIndex}/>                
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col bg-[#181e2a]">
        {/* Header do Chat Ativo */}
        <div className="flex h-16 items-center justify-center border-b border-[#262c3a] bg-white px-6 text-black">
          <span className="font-light text-sm">
            {selectedUser?.name} - {selectedUser?.phoneNumber}
          </span>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Divisor de Data */}
          <div className="flex justify-center">
            <span className="text-xs text-white/50">--- 21/11/2025 ---</span>
          </div>

          {/* Balões de Mensagem */}
          {MOCK_MESSAGES.map((msg) => {
            const isMe = msg.sender === "me";

            return (
              <div
                key={msg.id}
                className={`flex w-full ${
                  isMe ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md rounded-xl p-3 text-sm leading-relaxed ${
                    isMe
                      ? "bg-[#168331] text-white" // Verde (Minha mensagem)
                      : "border border-[#8f2d3a] bg-[#1a1c29] text-white" // Borda vermelha (Mensagem do usuário)
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

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
            >
              <MdSend className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatWindow;