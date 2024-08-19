export default async function callApi<T>(fetcher: () => T): Promise<T> {
    return new Promise<T>((resolve) => {
        setTimeout(() => {
            const data = fetcher();
            resolve(data);
        }, 500);
    });
}