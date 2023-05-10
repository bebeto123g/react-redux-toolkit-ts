import { Utils } from 'Core/Utils';

export class APIProvider {
    static async get<T>(url: string): Promise<T> {
        await Utils.delay(300);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async post<TResponse, TData extends object>(
        url: string,
        data: TData
    ): Promise<TResponse> {
        await Utils.delay(300);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

    static async patch<TResponse, TData extends object>(
        url: string,
        data: TData
    ): Promise<TResponse> {
        await Utils.delay(300);
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}
