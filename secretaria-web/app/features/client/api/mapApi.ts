import { apiFetch } from "@/lib/apiClient";
import { RoutingPreviewRequest } from "../requests.ts/MapRequests";

export async function getRoutingPreview(params: RoutingPreviewRequest) {
    const queryParams = new URLSearchParams({
        originLat: params.originLat.toString(),
        originLng: params.originLng.toString(),
        destLat: params.destLat.toString(),
        destLng: params.destLng.toString(),
    });

    return apiFetch(`/routing/preview?${queryParams.toString()}`, {
        method: 'GET',
    });
}