const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            // Se precisar de token JWT de autenticação no futuro, pode injetar aqui
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.json();
}