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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Mock de mensagens para demonstração
const MOCK_MESSAGES = [
    {
        id: 1,
        text: "Olá",
        sender: "user",
        date: new Date()
    },
    {
        id: 2,
        text: "Boa noite",
        sender: "me",
        date: new Date()
    },
    {
        id: 3,
        text: "Boa noite",
        sender: "user",
        date: new Date()
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        sender: "me",
        date: new Date()
    }
];
const LiveChatWindow = ({ users, selectedClient, onSelectClient })=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_MESSAGES);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleMessage = ()=>{
        const newMessage = {
            id: 5,
            text: message,
            sender: "me",
            date: new Date()
        };
        setMessages((prevMessages)=>[
                ...prevMessages,
                newMessage
            ]);
    };
    const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(messages[0].date);
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
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm",
                                children: "Conversas"
                            }, void 0, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-3",
                        children: users.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDoubleClick: ()=>handleDoubleClick(user.phoneNumber),
                                onClick: ()=>onSelectClient(user),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$admin$2f40$chat$2f$_components$2f$ClientItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    user: user,
                                    isSelected: user === selectedClient
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                lineNumber: 74,
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
                                selectedClient?.name,
                                " - ",
                                selectedClient?.phoneNumber
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 94,
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
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            messages.map((msg)=>{
                                const isMe = msg.sender === "me";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex w-full ${isMe ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-md rounded-xl p-3 text-sm leading-relaxed ${isMe ? "bg-[#168331] text-white" // Verde (Minha mensagem)
                                         : "border border-[#8f2d3a] bg-[#1a1c29] text-white" // Borda vermelha (Mensagem do usuário)
                                        }`,
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, msg.id, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 101,
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
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 135,
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
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/admin/@chat/_components/AdminLiveChat.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LiveChatWindow, "8dSBNY6MLghbYUF8eYcznf0jDHU=");
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
                            user.phoneNumber
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
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$map$2f$components$2f$CustomMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/map/components/CustomMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$map$2f$api$2f$NominatimAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/app/features/map/api/NominatimAPI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$MockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/secretaria-web/lib/MockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const AdminHomepageChat = ()=>{
    _s();
    const users = __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$lib$2f$MockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_USERS"];
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(users.filter({
        "AdminHomepageChat.useState": (user)=>user.type == "Client"
    }["AdminHomepageChat.useState"]));
    const [selectedClient, setSelectedClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(clients[0]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationCoords, setLocationCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        [
            0,
            0
        ]
    ]);
    const location = selectedClient.address;
    // useEffect(() => {
    //   async function loadClients() {
    //     try {
    //       const data = await getUsersFromApi();
    //       const filteredClients = data.filter((user: User) => user.type == "Client");
    //       setClients(filteredClients);
    //     } catch (error) {
    //       console.error("Erro ao buscar clientes:", error);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   }
    //   loadClients();
    // }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminHomepageChat.useEffect": ()=>{
            async function loadCoordinates() {
                const coords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$map$2f$api$2f$NominatimAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchCoordenateFromAddress"])(location);
                setLocationCoords(coords ? [
                    [
                        coords.lat,
                        coords.lng
                    ]
                ] : []);
            }
            loadCoordinates();
        }
    }["AdminHomepageChat.useEffect"], [
        location
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$components$2f$LoadingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
            lineNumber: 49,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$admin$2f40$chat$2f$_components$2f$AdminLiveChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    users: clients,
                    selectedClient: selectedClient,
                    onSelectClient: setSelectedClient
                }, void 0, false, {
                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                lineNumber: 54,
                columnNumber: 7
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
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col min-h-0 justify-end items-center w-full h-full overflow-hidden rounded-2xl relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex absolute shadow-lg border-black/30 justify-center items-center bg-white text-black rounded-xl h-fit w-fit max-w-5/6 py-3 px-5 mb-5 border-1 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: location
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full h-full rounded-b-lg z-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$app$2f$features$2f$map$2f$components$2f$CustomMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        routeCords: locationCoords
                                    }, void 0, false, {
                                        fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/admin/@chat/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminHomepageChat, "fUKS5h4NuRavfR3pEzxnLp6iVoI=");
_c = AdminHomepageChat;
const __TURBOPACK__default__export__ = AdminHomepageChat;
var _c;
__turbopack_context__.k.register(_c, "AdminHomepageChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/map/api/NominatimAPI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const getCurrentPosition = ()=>{
    if (!navigator.geolocation) {
        alert("A geolocalização não é suportada pelo seu navegador.");
        return;
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log("Coordenadas obtidas:", {
            lat,
            lng
        });
    // Aqui você pode atualizar o seu estado para passar para o CustomMap
    // ex: setCoordenadasDaRota([[lat, lng]])
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
    }, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0 // Não usa cache de localização antiga
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/secretaria-web/app/features/map/components/CustomMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
                    animate: true // Faz uma transição suave até o novo ponto
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
const CustomMap = ({ routeCords })=>{
    const defaultCenter = [
        -22.1043,
        -50.1925
    ];
    if (!routeCords || routeCords.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            center: defaultCenter,
            zoom: 14,
            style: {
                height: "100%",
                width: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
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
                fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapRecenter, {
                center: origem
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                lineNumber: 59,
                columnNumber: 13
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
                        fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        position: origem,
                        icon: customIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            children: "Início do Trajeto"
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                            lineNumber: 69,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        position: destino,
                        icon: customIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            children: "Fim do Trajeto"
                        }, void 0, false, {
                            fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            apenasUmPonto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: origem,
                icon: customIcon,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$secretaria$2d$web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                    children: "Localização encontrada"
                }, void 0, false, {
                    fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                    lineNumber: 80,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/secretaria-web/app/features/map/components/CustomMap.tsx",
        lineNumber: 52,
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
"[project]/secretaria-web/lib/MockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_EVENTS",
    ()=>BASE_EVENTS,
    "BASE_USERS",
    ()=>BASE_USERS,
    "BASE_VEHICLES",
    ()=>BASE_VEHICLES
]);
const BASE_USERS = [
    {
        id: "usr-001",
        name: "Allan Shinhama",
        email: "allanshinhama@gmail.com",
        address: "Av. Expedicionários do Brasil, 1234",
        password: "admin",
        phoneNumber: "(11) 98765-4321",
        type: "Admin",
        status: true,
        createdAt: new Date("2024-01-15T10:30:00Z")
    },
    {
        id: "usr-002",
        name: "Carlos Eduardo",
        email: "allanshinhamabelo@gmail.com",
        address: "Rua das Flores, 456",
        password: "client",
        phoneNumber: "(21) 99876-5432",
        type: "Client",
        status: true,
        createdAt: new Date("2024-02-20T14:15:00Z")
    },
    {
        id: "usr-003",
        name: "Mariana Souza",
        email: "mariana.souza@email.com",
        address: "Av. Brasil, 789",
        password: "client",
        phoneNumber: "(31) 97654-3210",
        type: "Client",
        status: false,
        createdAt: new Date("2024-03-05T09:00:00Z")
    },
    {
        id: "usr-004",
        name: "Lucas Mendes",
        email: "lucas.mendes@email.com",
        address: "Rua Sete de Setembro, 321",
        password: "client",
        phoneNumber: "(41) 98888-7777",
        type: "Client",
        status: true,
        createdAt: new Date("2024-04-12T18:45:00Z")
    }
];
const BASE_VEHICLES = [
    {
        id: "vec-001",
        plate: "ABC-1D23",
        latitude: -22.2139,
        longitude: -49.9458,
        driver: BASE_USERS[2],
        createdAt: new Date("2024-03-05T09:00:00Z")
    },
    {
        id: "vec-002",
        plate: "XYZ-9E87",
        latitude: -22.2185,
        longitude: -49.9521,
        driver: BASE_USERS[1],
        createdAt: new Date("2024-03-05T09:00:00Z")
    },
    {
        id: "vec-003",
        plate: "KML-4F56",
        latitude: -22.2091,
        longitude: -49.9389,
        driver: BASE_USERS[3],
        createdAt: new Date("2024-03-05T09:00:00Z")
    }
];
const BASE_EVENTS = [
    {
        id: "evt-001",
        code: "ATD-2026-001",
        severity: "critical",
        address: "Av. Sampaio Vidal, 450 - Centro, Marília - SP",
        description: "Colisão frontal entre carro e moto em alta velocidade.",
        injuryLocations: [
            "Membro Inferior Direito",
            "Tórax"
        ],
        createdByUser: BASE_USERS[0],
        status: "Em Andamento",
        operatorUser: BASE_USERS[1],
        assignedVehicle: BASE_VEHICLES[0],
        createdAt: new Date("2024-03-05T09:00:00Z")
    },
    {
        id: "evt-002",
        code: "ATD-2026-002",
        severity: "urgent",
        address: "Rua Das Roseiras, 120 - Jardim Fragata, Marília - SP",
        description: "Queda de própria altura com suspeita de fratura.",
        injuryLocations: [
            "Membro Superior Esquerdo"
        ],
        createdByUser: BASE_USERS[0],
        status: "Em Andamento",
        operatorUser: BASE_USERS[2],
        createdAt: new Date("2024-03-05T09:00:00Z")
    },
    {
        id: "evt-003",
        code: "ATD-2026-003",
        severity: "moderate",
        address: "Av. Tiradentes, 890 - Fragata, Marília - SP",
        description: "Mal-estar súbito em via pública com tontura e mal-estar geral.",
        injuryLocations: [
            "Nenhum visível"
        ],
        createdByUser: BASE_USERS[0],
        status: "Finalizado",
        operatorUser: BASE_USERS[1],
        assignedVehicle: BASE_VEHICLES[1],
        createdAt: new Date("2024-03-05T09:00:00Z")
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=secretaria-web_0d5h0gn._.js.map