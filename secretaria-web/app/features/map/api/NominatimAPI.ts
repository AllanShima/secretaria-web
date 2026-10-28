export async function searchCoordenateFromAddress(endereco: string) {
    // O Nominatim exige um formato URL-encoded e um User-Agent válido por questões de política de uso
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'SuaAplicacao-SecretariaWeb' // Coloque o nome da sua aplicação/projeto aqui
            }
        });

        const data = await response.json();

        if (data && data.length > 0) {
            const primeiroResultado = data[0];
            
            const coordenadas = {
                lat: parseFloat(primeiroResultado.lat),
                lng: parseFloat(primeiroResultado.lon),
                displayName: primeiroResultado.display_name // Nome completo formatado que o OSM encontrou
            };

            console.log("Coordenadas encontradas:", coordenadas);
            return coordenadas;
        } else {
            console.warn("Nenhum resultado encontrado para este endereço.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar geocodificação:", error);
        return null;
    }
}

export const obterLocalizacaoAtual = () => {
    if (!navigator.geolocation) {
        alert("A geolocalização não é suportada pelo seu navegador.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            console.log("Coordenadas obtidas:", { lat, lng });
            
            // Aqui você pode atualizar o seu estado para passar para o CustomMap
            // ex: setCoordenadasDaRota([[lat, lng]])
        },
        (error) => {
            console.error("Erro ao obter a localização:", error.message);
            switch(error.code) {
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
        },
        {
            enableHighAccuracy: true, // Tenta usar GPS se disponível (mais preciso)
            timeout: 10000,           // Tempo limite de espera (10 segundos)
            maximumAge: 0             // Não usa cache de localização antiga
        }
    );
};