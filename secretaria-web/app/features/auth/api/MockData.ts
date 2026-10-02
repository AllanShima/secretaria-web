import { Event } from "../types/Event";
import { User } from "../types/User";
import { Vehicle } from "../types/Vehicle";

export const BASE_USERS: User[] = [
  {
    id: "usr-001",
    name: "Allan Shinhama",
    email: "allanshinhama@gmail.com",
    password: "admin",
    phoneNumber: "(11) 98765-4321",
    type: "Admin",
    status: true,
    createdAt: new Date("2024-01-15T10:30:00Z"),
  },
  {
    id: "usr-002",
    name: "Carlos Eduardo",
    email: "allanshinhamabelo@gmail.com",
    password: "client",
    phoneNumber: "(21) 99876-5432",
    type: "Client",
    status: true,
    createdAt: new Date("2024-02-20T14:15:00Z"),
  },
  {
    id: "usr-003",
    name: "Mariana Souza",
    email: "mariana.souza@email.com",
    password: "client",
    phoneNumber: "(31) 97654-3210",
    type: "Client",
    status: false,
    createdAt: new Date("2024-03-05T09:00:00Z"),
  },
  {
    id: "usr-004",
    name: "Lucas Mendes",
    email: "lucas.mendes@email.com",
    password: "client",
    phoneNumber: "(41) 98888-7777",
    type: "Client",
    status: true,
    createdAt: new Date("2024-04-12T18:45:00Z"),
  },
];

    // id?: string;
    // name: string;
    // email: string;
    // password?: string; // Opcional dependendo de onde for usada (ex: frontend)
    // phoneNumber: string;
    // type: "Admin" | "Client";
    // status: boolean;
    // createdAt?: Date;

export const BASE_VEHICLES: Vehicle[] = [
  {
    id: "vec-001",
    plate: "ABC-1D23",
    latitude: -22.2139,
    longitude: -49.9458,
    driver: BASE_USERS[2], // Ana Silva (Admin)
    createdAt: new Date("2024-03-05T09:00:00Z")
  },
  {
    id: "vec-002",
    plate: "XYZ-9E87",
    latitude: -22.2185,
    longitude: -49.9521,
    driver: BASE_USERS[1], // Carlos Eduardo (Client)
    createdAt: new Date("2024-03-05T09:00:00Z")
  },
  {
    id: "vec-003",
    plate: "KML-4F56",
    latitude: -22.2091,
    longitude: -49.9389,
    driver: BASE_USERS[3], // Lucas Mendes (Client)
    createdAt: new Date("2024-03-05T09:00:00Z")
  },
];

export const BASE_EVENTS: Event[] = [
  {
    id: "evt-001",
    code: "ATD-2026-001",
    severity: "critical",
    address: "Av. Sampaio Vidal, 450 - Centro, Marília - SP",
    description: "Colisão frontal entre carro e moto em alta velocidade.",
    injuryLocations: ["Membro Inferior Direito", "Tórax"],
    createdByUser: BASE_USERS[0], // Ana Silva (Admin/Atendente)
    status: "Em Andamento",
    operatorUser: BASE_USERS[1], // Carlos Eduardo (Telefonista)
    assignedVehicle: BASE_VEHICLES[0], // Veículo ABC-1D23
    createdAt: new Date("2024-03-05T09:00:00Z")
  },
  {
    id: "evt-002",
    code: "ATD-2026-002",
    severity: "urgent",
    address: "Rua Das Roseiras, 120 - Jardim Fragata, Marília - SP",
    description: "Queda de própria altura com suspeita de fratura.",
    injuryLocations: ["Membro Superior Esquerdo"],
    createdByUser: BASE_USERS[0],
    status: "Não Iniciado",
    operatorUser: BASE_USERS[2], // Mariana Souza
    createdAt: new Date("2024-03-05T09:00:00Z")
  },
  {
    id: "evt-003",
    code: "ATD-2026-003",
    severity: "moderate",
    address: "Av. Tiradentes, 890 - Fragata, Marília - SP",
    description: "Mal-estar súbito em via pública com tontura e mal-estar geral.",
    injuryLocations: ["Nenhum visível"],
    createdByUser: BASE_USERS[0],
    status: "Finalizado",
    operatorUser: BASE_USERS[1],
    assignedVehicle: BASE_VEHICLES[1], // Veículo XYZ-9E87
    createdAt: new Date("2024-03-05T09:00:00Z")
  },
];