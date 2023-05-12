export class APIProvider {
    static async get<T>(url: string): Promise<T> {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    static async post<TResponse, TData extends object>(
        url: string,
        data: TData
    ): Promise<TResponse> {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    static async patch<TResponse, TData extends object>(
        url: string,
        data: TData
    ): Promise<TResponse> {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }
}
