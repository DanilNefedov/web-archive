


export async function getCall(url: string): Promise<Response>{
    try {
        const response = await fetch(url, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`Request execution error: ${response.status} ${response.statusText}`);
        }

        const userData = await response.json();
        return userData
    } catch (error) {
        throw new Error(`Error during query execution: ${error}`);
    }
}