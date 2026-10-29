import { toast } from "@/components/ui/toast";

let ultimaRequisicao = 0;

export async function searchCoordenateFromAddress(endereco: string) {
    const agora = Date.now();
    const tempoMinimoEntreRequisicoes = 1000; // 1 segundo exato

    // Se passou menos de 1 segundo desde a última chamada, aguarda o resto do tempo
    if (agora - ultimaRequisicao < tempoMinimoEntreRequisicoes) {
        const espera = tempoMinimoEntreRequisicoes - (agora - ultimaRequisicao);
        await new Promise(resolve => setTimeout(resolve, espera));
    }

    ultimaRequisicao = Date.now();

    async function fetchNominatim(query: string) {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'SecretariaWeb-SecretariaWebMap'
            }
        });
        return await response.json();
    }

    try {
        // 1. Tenta buscar o endereço completo exatamente como o usuário digitou
        let data = await fetchNominatim(endereco);

        // 2. SE FALHAR E TIVER HÍFEN/NÚMERO: Tenta limpar o número e buscar só a rua/bairro/cidade
        if ((!data || data.length === 0) && endereco.includes('-')) {
            // Ex: Transforma "R. Pres. Eurico Gaspar Dutra, 14-56 - Pompéia" em "R. Pres. Eurico Gaspar Dutra, Pompéia"
            const enderecoSimplificado = endereco.replace(/,\s*\d+-\d+/, '');
            console.warn(`Endereço exato não encontrado. Tentando busca simplificada: ${enderecoSimplificado}`);
            
            data = await fetchNominatim(enderecoSimplificado);
        }

        if (data && data.length > 0) {
            const primeiroResultado = data[0];
            
            const coordenadas = {
                lat: parseFloat(primeiroResultado.lat),
                lng: parseFloat(primeiroResultado.lon),
                displayName: primeiroResultado.display_name
            };

            console.log("Coordenadas encontradas:", coordenadas);
            return coordenadas;
        } else {
            toast.add({
                type: "info",
                description: "Endereço não encontrado!",
                priority: "high",
            })
            console.warn("Nenhum resultado encontrado nem na busca simplificada.");
            return null;
        }
    } catch (error) {
        toast.add({
          type: "error",
          description: "Erro ao procurar o endereço...",
          priority: "high",
        })
        console.error("Erro ao buscar geocodificação:", error);
        return null;
    }
}

export const getCurrentPosition = () => {
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