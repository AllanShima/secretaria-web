"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Spinner } from '@/components/ui/spinner';

interface CustomMapProps {
    routeCords?: [number, number][];
    isLoading?: boolean; // <-- Nova prop para controlar o estado de carregamento
}

// Ícone padrão do Leaflet
const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Componente auxiliar para recentrar o mapa dinamicamente quando a origem mudar
function MapRecenter({ center }: { center: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, map.getZoom(), {
                animate: true
            });
        }
    }, [center, map]);
    return null;
}

const CustomMap = ({ routeCords, isLoading = false }: CustomMapProps) => {
    const defaultCenter: [number, number] = [-22.1043, -50.1925];

    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-xs transition-all">
                    <div className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-lg border border-zinc-700 shadow-lg">
                        <Spinner/>
                        <span className="text-sm font-medium">Carregando rota...</span>
                    </div>
                </div>
            )}

            {!routeCords || routeCords.length === 0 ? (
                <MapContainer center={defaultCenter} zoom={14} style={{ height: "100%", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            ) : (
                (() => {
                    const origem = routeCords[0];
                    const apenasUmPonto = routeCords.length === 1;
                    const destino = routeCords[routeCords.length - 1];

                    return (
                        <MapContainer center={origem} zoom={14} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <MapRecenter center={origem} />

                            {!apenasUmPonto && (
                                <>
                                    <Polyline
                                        positions={routeCords}
                                        pathOptions={{ color: "#ff5722", weight: 6, opacity: 0.8 }}
                                    />
                                    <Marker position={origem} icon={customIcon}>
                                        <Popup>Início do Trajeto</Popup>
                                    </Marker>
                                    <Marker position={destino} icon={customIcon}>
                                        <Popup>Fim do Trajeto</Popup>
                                    </Marker>
                                </>
                            )}

                            {apenasUmPonto && (
                                <Marker position={origem} icon={customIcon}>
                                    <Popup>Localização encontrada</Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    );
                })()
            )}
        </div>
    );
};

export default CustomMap;