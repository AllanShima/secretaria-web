(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$admin$2f40$chat$2f$_components$2f$ClientItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$auth$2f$api$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/auth/api/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/client/api/chatApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const LiveChatWindow = ({ users, selectedUser, setSelectedUser })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$auth$2f$api$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Busca as mensagens sempre que o atendente selecionado ou o usuário mudar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveChatWindow.useEffect": ()=>{
            const loadMessages = {
                "LiveChatWindow.useEffect.loadMessages": async ()=>{
                    if (!selectedUser?.id || !user?.id) return;
                    try {
                        setIsLoading(true);
                        const params = {
                            attendantId: selectedUser.id,
                            driverId: user.id
                        };
                        const msgs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversations"])(params);
                        if (msgs) {
                            setMessages(msgs.messages || []);
                        } else {
                            setMessages([]);
                        }
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
                            type: "error",
                            description: String(error)
                        });
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["LiveChatWindow.useEffect.loadMessages"];
            loadMessages();
        }
    }["LiveChatWindow.useEffect"], [
        selectedUser,
        user?.id
    ]);
    const handleMessage = async ()=>{
        try {
            if (!message.trim()) {
                throw new Error("Mensagem vazia!");
            }
            if (!selectedUser?.id || !user?.id) return;
            const newMessage = {
                attendantId: selectedUser.id,
                driverId: user.id,
                senderId: user.id,
                text: message.trim()
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessage"])(newMessage);
            if (response) {
                setMessages((prevMessages)=>[
                        ...prevMessages ?? [],
                        response
                    ]);
                setMessage(""); // Limpa o campo de texto após enviar
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
                type: "error",
                description: String(error)
            });
        }
    };
    const handleDoubleClick = async (phoneNumber)=>{
        try {
            // Copia o texto para a área de transferência
            await navigator.clipboard.writeText(phoneNumber);
            const id = __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
                type: "info",
                description: "Telefone copiado!"
            });
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].close(id);
            }, 2000);
        } catch (error) {
            console.error("Falha ao copiar texto: ", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
                type: "error",
                description: "Falha ao copiar o telefone!"
            });
        }
    };
    const dataFormatada = messages?.[0]?.sentAt ? new Date(messages[0].sentAt).toLocaleDateString('pt-BR') : "Data não fornecida";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full overflow-hidden rounded-2xl bg-[#131924] text-white shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-fit flex-col border-r border-[#262c3a] bg-[#161c28]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 items-center justify-center gap-2 border-b border-[#262c3a] bg-white px-6 text-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineChat"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm",
                                children: "Conversas"
                            }, void 0, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-3",
                        children: users.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDoubleClick: ()=>handleDoubleClick(user.phone),
                                onClick: ()=>setSelectedUser(user),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$admin$2f40$chat$2f$_components$2f$ClientItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    user: user,
                                    isSelected: user.id === selectedUser.id
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col h-full ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 items-center justify-center border-b border-[#262c3a] bg-white px-6 text-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-light text-sm",
                            children: [
                                selectedUser?.name,
                                " - ",
                                selectedUser?.phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-6 overflow-hidden scrollbar-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white/50",
                                    children: [
                                        "--- ",
                                        dataFormatada,
                                        " ---"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            messages.map((msg)=>{
                                const isMe = msg.senderId === user?.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex w-full ${isMe ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-md rounded-xl p-3 text-sm leading-relaxed ${isMe ? "bg-[#168331] text-white" // Verde (Minha mensagem)
                                         : "border border-[#8f2d3a] bg-[#1a1c29] text-white" // Borda vermelha (Mensagem do usuário)
                                        }`,
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, msg.id, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-[#181e2a]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 rounded-xl border border-[#2d3545] bg-[#161c28]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value),
                                        placeholder: "Escreva uma mensagem aqui...",
                                        className: "min-h-[50px] max-h-[100px] w-full resize-none border-none bg-transparent p-3 text-sm text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    className: "h-12 w-12 rounded-xl bg-[#ce3434] hover:bg-[#b02828] text-white transition-colors",
                                    onClick: ()=>handleMessage(),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSend"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LiveChatWindow, "jlMHX5cw9luk0HPlsLRyLrgU4Ms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$auth$2f$api$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LiveChatWindow;
const __TURBOPACK__default__export__ = LiveChatWindow;
var _c;
__turbopack_context__.k.register(_c, "LiveChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
;
;
;
const ClientItem = ({ user, isSelected })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors ${isSelected ? "border-[#76314a] bg-[#3a1d28]" // Borda e fundo avermelhado da seleção
         : "border-[#262c3a] bg-[#1c2331] hover:bg-[#232b3c]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                className: "flex h-10 w-10 items-center justify-center rounded-lg border text-[#25c345] border-2 border-[#1c7f3e] bg-[#1f4c2a]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiSolidAmbulance"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "truncate font-medium text-sm text-white",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-xs text-white/40",
                        children: [
                            "TEL - ",
                            user.phone
                        ]
                    }, void 0, true, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/admin/@chat/_components/ClientItem.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ClientItem;
const __TURBOPACK__default__export__ = ClientItem;
var _c;
__turbopack_context__.k.register(_c, "ClientItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/admin/@chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$admin$2f40$chat$2f$_components$2f$AdminLiveChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx [app-client] (ecmascript)");
// import { getUsersFromApi } from "@/services/user-service"; // função fetch
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$LoadingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/LoadingPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$components$2f$CustomMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/client/components/CustomMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$NominatimAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/client/api/NominatimAPI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$auth$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/auth/api/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$admin$2f$api$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/admin/api/adminApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$mapApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/client/api/mapApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const AdminHomepageChat = ()=>{
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRoutingLoading, setIsRoutingLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationCoords, setLocationCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminHomepageChat.useEffect": ()=>{
            async function loadData() {
                try {
                    setIsLoading(true);
                    const getAllEvents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$admin$2f$api$2f$adminApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvents"])();
                    setEvents(getAllEvents);
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$auth$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDrivers"])();
                    setUsers(data);
                    if (data && data.length > 0) {
                        setSelectedUser(data[0]);
                    }
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
                        type: "error",
                        description: String(error),
                        priority: "high"
                    });
                } finally{
                    setIsLoading(false);
                }
            }
            loadData();
        }
    }["AdminHomepageChat.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminHomepageChat.useEffect": ()=>{
            if (!selectedUser || !events) return;
            const loadDriverLocation = {
                "AdminHomepageChat.useEffect.loadDriverLocation": async (user)=>{
                    try {
                        setIsRoutingLoading(true);
                        const fullDriverInfo = user.id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$auth$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDriverById"])(user.id) : null;
                        const latitude = fullDriverInfo?.vehicle?.latitude;
                        const longitude = fullDriverInfo?.vehicle?.longitude;
                        // Se o motorista não tiver latitude/longitude cadastradas, interrompe
                        if (latitude === undefined || longitude === undefined) return;
                        // Mude de .find para .filter
                        const foundEventsOfVehicle = events.filter({
                            "AdminHomepageChat.useEffect.loadDriverLocation.foundEventsOfVehicle": (event)=>event.vehicles[0]?.vehicleId == fullDriverInfo?.vehicle?.id
                        }["AdminHomepageChat.useEffect.loadDriverLocation.foundEventsOfVehicle"]);
                        const onGoingEventOfVehicle = foundEventsOfVehicle.find({
                            "AdminHomepageChat.useEffect.loadDriverLocation.onGoingEventOfVehicle": (event)=>event.vehicles[0]?.status === "NOT_STARTED"
                        }["AdminHomepageChat.useEffect.loadDriverLocation.onGoingEventOfVehicle"]);
                        // Se encontrou o evento e ele tem endereço, busca as coordenadas do destino
                        if (onGoingEventOfVehicle?.address) {
                            const eventCoords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$NominatimAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchCoordenateFromAddress"])(onGoingEventOfVehicle.address);
                            // Valida se realmente retornou lat/lng antes de prosseguir
                            if (eventCoords && eventCoords.lat !== undefined && eventCoords.lng !== undefined) {
                                const routingPreviewBody = {
                                    originLat: latitude,
                                    originLng: longitude,
                                    destLat: eventCoords.lat,
                                    destLng: eventCoords.lng
                                };
                                const routingPreview = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$api$2f$mapApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutingPreview"])(routingPreviewBody);
                                if (routingPreview && routingPreview.coordinates) {
                                    const formattedRouteCoords = routingPreview.coordinates.map({
                                        "AdminHomepageChat.useEffect.loadDriverLocation.formattedRouteCoords": (item)=>[
                                                item.lat,
                                                item.lng
                                            ]
                                    }["AdminHomepageChat.useEffect.loadDriverLocation.formattedRouteCoords"]);
                                    formattedRouteCoords.distanceMeters = routingPreview.distanceMeters ?? 0;
                                    formattedRouteCoords.durationSeconds = routingPreview.durationSeconds ?? 0;
                                    setLocationCoords(formattedRouteCoords);
                                    return;
                                }
                            }
                        }
                        // Fallback caso não tenha evento ou a rota falhe: mostra apenas a localização do veículo
                        const fallbackCoords = [
                            [
                                latitude,
                                longitude
                            ]
                        ];
                        fallbackCoords.distanceMeters = 0;
                        fallbackCoords.durationSeconds = 0;
                        setLocationCoords(fallbackCoords);
                    } catch (error) {
                        console.error("Erro ao carregar a localização do motorista:", error);
                    } finally{
                        setIsRoutingLoading(false);
                    }
                }
            }["AdminHomepageChat.useEffect.loadDriverLocation"];
            loadDriverLocation(selectedUser);
        }
    }["AdminHomepageChat.useEffect"], [
        selectedUser,
        events
    ]);
    if (isLoading || !users || !selectedUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$LoadingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$admin$2f40$chat$2f$_components$2f$AdminLiveChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    users: users,
                    selectedUser: selectedUser,
                    setSelectedUser: setSelectedUser
                }, void 0, false, {
                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                    lineNumber: 135,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                lineNumber: 134,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 min-h-0 w-full gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col flex-1 min-h-0 w-full gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-white/50 font-semibold text-sm shrink-0",
                            children: "Última Localização"
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                            lineNumber: 144,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col min-h-0 justify-end items-center w-full h-full overflow-hidden rounded-2xl relative",
                            children: [
                                locationCoords.distanceMeters !== undefined && locationCoords.distanceMeters > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "z-10 flex items-center gap-4 absolute top-4 left-14 bg-zinc-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-zinc-700 shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-zinc-400",
                                                    children: "Distância"
                                                }, void 0, false, {
                                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: [
                                                        (locationCoords.distanceMeters / 1000).toFixed(2),
                                                        " km"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-[1px] bg-zinc-700"
                                        }, void 0, false, {
                                            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-zinc-400",
                                                    children: "Tempo Estimado"
                                                }, void 0, false, {
                                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: [
                                                        Math.round(locationCoords.durationSeconds / 60),
                                                        " min"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "z-0 flex w-full h-full rounded-b-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$client$2f$components$2f$CustomMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        routeCords: locationCoords,
                                        isLoading: isRoutingLoading
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                            lineNumber: 148,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                    lineNumber: 143,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
        lineNumber: 133,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminHomepageChat, "/4F9NusC7CWLMpxz4sqazW36tDw=");
_c = AdminHomepageChat;
const __TURBOPACK__default__export__ = AdminHomepageChat;
var _c;
__turbopack_context__.k.register(_c, "AdminHomepageChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/admin/api/adminApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concludeEvent",
    ()=>concludeEvent,
    "createEvent",
    ()=>createEvent,
    "getEventById",
    ()=>getEventById,
    "getEventLocationById",
    ()=>getEventLocationById,
    "getEvents",
    ()=>getEvents,
    "getNotificationsByEventId",
    ()=>getNotificationsByEventId,
    "updateEventById",
    ()=>updateEventById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/lib/apiClient.ts [app-client] (ecmascript)");
;
async function getEvents() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/emergency-calls/', {
        method: 'GET'
    }) ?? [];
}
async function getEventById(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/emergency-calls/${id}`);
}
async function getNotificationsByEventId(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/emergency-calls/${id}/notifications`);
}
async function getEventLocationById(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/emergency-calls/get_location?id=${id}`);
}
async function createEvent(eventBody) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/emergency-calls/`, {
        method: 'POST',
        body: JSON.stringify(eventBody)
    });
}
async function concludeEvent(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/emergency-calls/${id}/conclude`, {
        method: 'PATCH',
        body: JSON.stringify({})
    });
}
async function updateEventById(id, eventBody) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/emergency-calls/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(eventBody)
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/client/api/NominatimAPI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentPosition",
    ()=>getCurrentPosition,
    "searchCoordenateFromAddress",
    ()=>searchCoordenateFromAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/toast.tsx [app-client] (ecmascript)");
;
let ultimaRequisicao = 0;
async function searchCoordenateFromAddress(endereco) {
    const agora = Date.now();
    const tempoMinimoEntreRequisicoes = 1000; // 1 segundo exato
    // Se passou menos de 1 segundo desde a última chamada, aguarda o resto do tempo
    if (agora - ultimaRequisicao < tempoMinimoEntreRequisicoes) {
        const espera = tempoMinimoEntreRequisicoes - (agora - ultimaRequisicao);
        await new Promise((resolve)=>setTimeout(resolve, espera));
    }
    ultimaRequisicao = Date.now();
    async function fetchNominatim(query) {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'SecretariaWeb-SecretariaWebMap'
            }
        });
        return await response.json();
    }
    try {
        // 1. Tenta buscar o endereço completo exatamente como o usuário digitou
        let data = await fetchNominatim(endereco);
        // 2. SE FALHAR E TIVER HÍFEN/NÚMERO: Tenta limpar o número e buscar só a rua/bairro/cidade
        if ((!data || data.length === 0) && endereco.includes('-')) {
            // Ex: Transforma "R. Pres. Eurico Gaspar Dutra, 14-56 - Pompéia" em "R. Pres. Eurico Gaspar Dutra, Pompéia"
            const enderecoSimplificado = endereco.replace(/,\s*\d+-\d+/, '');
            console.warn(`Endereço exato não encontrado. Tentando busca simplificada: ${enderecoSimplificado}`);
            data = await fetchNominatim(enderecoSimplificado);
        }
        if (data && data.length > 0) {
            const primeiroResultado = data[0];
            const coordenadas = {
                lat: parseFloat(primeiroResultado.lat),
                lng: parseFloat(primeiroResultado.lon),
                displayName: primeiroResultado.display_name
            };
            console.log("Coordenadas encontradas:", coordenadas);
            return coordenadas;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
                type: "info",
                description: "Endereço não encontrado!",
                priority: "high"
            });
            console.warn("Nenhum resultado encontrado nem na busca simplificada.");
            return null;
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].add({
            type: "error",
            description: "Erro ao procurar o endereço...",
            priority: "high"
        });
        console.error("Erro ao buscar geocodificação:", error);
        return null;
    }
}
async function getCurrentPosition() {
    if (!navigator.geolocation) {
        alert("A geolocalização não é suportada pelo seu navegador.");
        return null;
    }
    return new Promise((resolve)=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log("Coordenadas obtidas:", pos.lat, pos.lng);
            resolve(pos);
        }, (error)=>{
            console.error("Erro ao obter a localização:", error.message);
            switch(error.code){
                case error.PERMISSION_DENIED:
                    alert("Permissão de localização negada pelo usuário.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Informações de localização indisponíveis.");
                    break;
                case error.TIMEOUT:
                    alert("O tempo para obter a localização expirou.");
                    break;
            }
            resolve(null);
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0 // Não usa cache de localização antiga
        });
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/client/api/chatApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMessage",
    ()=>createMessage,
    "getConversations",
    ()=>getConversations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/lib/apiClient.ts [app-client] (ecmascript)");
;
async function getConversations(params) {
    const queryParams = new URLSearchParams({
        attendantId: params.attendantId.toString(),
        driverId: params.driverId.toString()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/conversations/?${queryParams.toString()}`, {
        method: 'GET'
    });
}
async function createMessage(messageBody) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/conversations/messages', {
        method: 'POST',
        body: JSON.stringify(messageBody)
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/client/api/mapApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoutingPreview",
    ()=>getRoutingPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/lib/apiClient.ts [app-client] (ecmascript)");
;
async function getRoutingPreview(params) {
    const queryParams = new URLSearchParams({
        originLat: params.originLat.toString(),
        originLng: params.originLng.toString(),
        destLat: params.destLat.toString(),
        destLng: params.destLng.toString()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/routing/preview?${queryParams.toString()}`, {
        method: 'GET'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/client/components/CustomMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/spinner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Ícone padrão do Leaflet
const customIcon = __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});
// Componente auxiliar para recentrar o mapa dinamicamente quando a origem mudar
function MapRecenter({ center }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRecenter.useEffect": ()=>{
            if (center) {
                map.setView(center, map.getZoom(), {
                    animate: true
                });
            }
        }
    }["MapRecenter.useEffect"], [
        center,
        map
    ]);
    return null;
}
_s(MapRecenter, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapRecenter;
const CustomMap = ({ routeCords, isLoading = false })=>{
    const defaultCenter = [
        -22.1043,
        -50.1925
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-xs transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-lg border border-zinc-700 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: "Carregando rota..."
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !routeCords || routeCords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: defaultCenter,
                zoom: 14,
                style: {
                    height: "100%",
                    width: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                }, void 0, false, {
                    fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                    lineNumber: 54,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                lineNumber: 53,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : (()=>{
                const origem = routeCords[0];
                const apenasUmPonto = routeCords.length === 1;
                const destino = routeCords[routeCords.length - 1];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                    center: origem,
                    zoom: 14,
                    style: {
                        height: "100%",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                            attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                            lineNumber: 64,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapRecenter, {
                            center: origem
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                            lineNumber: 69,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        !apenasUmPonto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                                    positions: routeCords,
                                    pathOptions: {
                                        color: "#ff5722",
                                        weight: 6,
                                        opacity: 0.8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                                    lineNumber: 73,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    position: origem,
                                    icon: customIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                        children: "Início do Trajeto"
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                                        lineNumber: 78,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                                    lineNumber: 77,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                    position: destino,
                                    icon: customIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                        children: "Fim do Trajeto"
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                                        lineNumber: 81,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                                    lineNumber: 80,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                            lineNumber: 72,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0)),
                        apenasUmPonto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: origem,
                            icon: customIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                children: "Localização encontrada"
                            }, void 0, false, {
                                fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                                lineNumber: 88,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                            lineNumber: 87,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
                    lineNumber: 63,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/features/client/components/CustomMap.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CustomMap;
const __TURBOPACK__default__export__ = CustomMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapRecenter");
__turbopack_context__.k.register(_c1, "CustomMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/components/LoadingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/components/ui/spinner.tsx [app-client] (ecmascript)");
;
;
const LoadingPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-fit h-fit p-6 rounded-2xl bg-linear-to-br from-white/10 to-black/10 shadow-xl border-white/20  text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/secretaria-web/components/LoadingPage.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/secretaria-web/components/LoadingPage.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/secretaria-web/components/LoadingPage.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoadingPage;
const __TURBOPACK__default__export__ = LoadingPage;
var _c;
__turbopack_context__.k.register(_c, "LoadingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/components/ui/spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2Icon>");
;
;
;
function Spinner({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
        "data-slot": "spinner",
        role: "status",
        "aria-label": "Loading",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("size-4 animate-spin", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/secretaria-web/components/ui/spinner.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Spinner;
;
var _c;
__turbopack_context__.k.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/secretaria-web/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/secretaria-web/components/ui/textarea.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=secretaria-web_0bv6a9g._.js.map