import { User } from "./User";

export interface Vehicle {
  id: string;
  plate: string;      // Placa do veículo
  longitude: number;
  latitude: number;
  driver: User;       // Referência direta ao objeto de usuário
  createdAt: Date;
}