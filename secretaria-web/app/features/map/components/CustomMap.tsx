"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface CustomMapProps {
    routeCords?: [number, number][];
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
                animate: true // Faz uma transição suave até o novo ponto
            });
        }
    }, [center, map]);
    return null;
}

const CustomMap = ({ routeCords }: CustomMapProps) => {
    const defaultCenter: [number, number] = [-22.1043, -50.1925];

    if (!routeCords || routeCords.length === 0) {
        return (
            <MapContainer center={defaultCenter} zoom={14} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        );
    }

    const origem = routeCords[0];
    const apenasUmPonto = routeCords.length === 1;
    const destino = routeCords[routeCords.length - 1];

    return (
        <MapContainer center={origem} zoom={14} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Este componente monitoriza a origem e move o mapa automaticamente */}
            <MapRecenter center={origem} />

            {/* Se houver mais de um ponto: Desenha a rota */}
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

            {/* Se for apenas um ponto: Mostra só o marcador */}
            {apenasUmPonto && (
                <Marker position={origem} icon={customIcon}>
                    <Popup>Localização encontrada</Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default CustomMap;