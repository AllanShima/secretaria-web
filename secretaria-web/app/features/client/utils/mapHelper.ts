import { getCurrentPosition, searchCoordenateFromAddress } from '@/app/features/client/api/NominatimAPI';
import { RoutingPreviewRequest } from '../requests.ts/MapRequests';
import { getRoutingPreview } from '../api/mapApi';
import { RouteCoordinates } from '../types/Routing';

export async function loadCoordinatesForAddress(
    address: string, 
    setLocationCoords: React.Dispatch<React.SetStateAction<RouteCoordinates>>
) {
    if (!address) return;

    try {
        const userPosition: any = await getCurrentPosition();
        const coords = await searchCoordenateFromAddress(address);

        if (coords) {
            const routingPreviewBody: RoutingPreviewRequest = {
                originLat: userPosition.lat,
                originLng: userPosition.lng,
                destLat: coords.lat,
                destLng: coords.lng,
            };

            const routingPreview: any = await getRoutingPreview(routingPreviewBody);

            if (routingPreview && routingPreview.coordinates) {
                const formattedRouteCoords = routingPreview.coordinates.map(
                    (item: { lat: number; lng: number }) => [item.lat, item.lng]
                ) as RouteCoordinates;

                // Anexando os dados extras com segurança de tipos
                formattedRouteCoords.distanceMeters = routingPreview.distanceMeters ?? 0;
                formattedRouteCoords.durationSeconds = routingPreview.durationSeconds ?? 0;

                setLocationCoords(formattedRouteCoords);
            } else {
                const fallbackCoords = [
                    [userPosition.lat, userPosition.lng],
                    [coords.lat, coords.lng]
                ] as RouteCoordinates;
                
                fallbackCoords.distanceMeters = 0;
                fallbackCoords.durationSeconds = 0;

                setLocationCoords(fallbackCoords);
            }
        } else {
            const emptyCoords = [] as unknown as RouteCoordinates;
            emptyCoords.distanceMeters = 0;
            emptyCoords.durationSeconds = 0;
            setLocationCoords(emptyCoords);
        }
    } catch (error) {
        console.error("Erro ao buscar coordenadas:", error);
        const errCoords = [] as unknown as RouteCoordinates;
        errCoords.distanceMeters = 0;
        errCoords.durationSeconds = 0;
        setLocationCoords(errCoords);
    }
}