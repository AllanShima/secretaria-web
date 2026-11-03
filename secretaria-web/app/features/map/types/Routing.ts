// Define o tipo para cada ponto de coordenada [latitude, longitude]
export type CoordinateTuple = [number, number];

// Estende o array de coordenadas para aceitar propriedades adicionais
export interface RouteCoordinates extends Array<CoordinateTuple> {
    distanceMeters?: number;
    durationSeconds?: number;
}