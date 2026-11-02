import { Event } from "@/app/features/auth/types/Event";
import { User } from "@/app/features/auth/types/User";
import { Vehicle } from "@/app/features/auth/types/Vehicle";


export const BASE_USERS: User[] = [
  {
    id: "usr-001",
    name: "Allan Shinhama",
    email: "allanshinhama@gmail.com",
    address: "Av. Expedicionários do Brasil, 1234",
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
    address: "Rua das Flores, 456",
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
    address: "Av. Brasil, 789",
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
    address: "Rua Sete de Setembro, 321",
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
    protocol: "ATD-2026-001",
    address: "Av. Sampaio Vidal, 450 - Centro, Marília - SP",
    returnLocation: "Hospital Regional de Marília",
    whatHappened: "Colisão frontal entre carro e moto em alta velocidade.",
    patientCondition: "Crítico",
    apparentAge: 35,
    patientCount: 1,
    injuryCondition: "Membro Inferior Direito, Tórax",
    observations: "Paciente consciente, porém desorientado no local.",
    attendantId: BASE_USERS[0]?.id ?? "user-001",
    createdAt: new Date("2024-03-05T09:00:00Z"),
    vehicles: [
      {
        vehicleId: BASE_VEHICLES[0]?.id ?? "veh-001",
        status: "Em Atendimento"
      }
    ]
  },
  {
    id: "evt-002",
    protocol: "ATD-2026-002",
    address: "Rua Das Roseiras, 120 - Jardim Fragata, Marília - SP",
    returnLocation: "Pronto Atendimento da Zona Norte",
    whatHappened: "Queda de própria altura com suspeita de fratura.",
    patientCondition: "Urgente",
    apparentAge: 62,
    patientCount: 1,
    injuryCondition: "Membro Superior Esquerdo",
    observations: "Apresenta fortes dores e imobilidade no braço esquerdo.",
    attendantId: BASE_USERS[0]?.id ?? "user-001",
    createdAt: new Date("2024-03-05T09:00:00Z"),
    vehicles: [
      {
        vehicleId: BASE_VEHICLES[2]?.id ?? "veh-003",
        status: "A Caminho"
      }
    ]
  },
  {
    id: "evt-003",
    protocol: "ATD-2026-003",
    address: "Av. Tiradentes, 890 - Fragata, Marília - SP",
    returnLocation: "N/A",
    whatHappened: "Mal-estar súbito em via pública com tontura e vertigem.",
    patientCondition: "Moderado",
    apparentAge: 28,
    patientCount: 1,
    injuryCondition: "Nenhum visível",
    observations: "Sinais vitais estabilizados após atendimento inicial no local.",
    attendantId: BASE_USERS[0]?.id ?? "user-001",
    createdAt: new Date("2024-03-05T09:00:00Z"),
    vehicles: [
      {
        vehicleId: BASE_VEHICLES[1]?.id ?? "veh-002",
        status: "Finalizado"
      }
    ]
  },
];