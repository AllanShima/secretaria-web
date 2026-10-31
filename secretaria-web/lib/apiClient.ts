const API_URL = 'http://localhost:3001';

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            // Se precisar de token JWT de autenticação no futuro, pode injetar aqui
        },
        ...options,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erro na requisição');
    }

    // Verifica se o status é 204 (No Content) ou se o texto da resposta está vazio
    if (response.status === 204) {
        return null;
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}