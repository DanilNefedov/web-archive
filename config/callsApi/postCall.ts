import { RequestData } from "@/types/types";




export async function postCall<T>(requestData: RequestData<T>): Promise<Response> {
    try {
        const response = await fetch(requestData.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData.data),
        });

        if (!response.ok) {
            throw new Error(`Request execution error: ${response.status} ${response.statusText}`);
        }

        return response;
    } catch (error) {
        throw new Error(`Error during query execution: ${error}`);
    }
}

