"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { BaseUser } from "../types/User";

interface AuthContextType {
  user: BaseUser | null;
  login: (user: BaseUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // 1. Inicializa o estado buscando do localStorage (caso exista)
  const [user, setUser] = useState<BaseUser | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("@RotaSAMU:user");
      if (savedUser) {
        try {
          return JSON.parse(savedUser);
        } catch (e) {
          console.error("Erro ao parsear usuário do localStorage", e);
        }
      }
    }
    return null;
  });

  // 2. Salva no localStorage quando o usuário fizer login
  const login = (newUser: BaseUser) => {
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("@RotaSAMU:user", JSON.stringify(newUser));
    }
  };
  
  // 3. Remove do localStorage quando fizer logout
  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("@RotaSAMU:user");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}