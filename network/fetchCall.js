export default async function fetchCall(url, options) {
    const response = await fetch(url, {
        next: { revalidate: 3600 },
        options,
    });

    if (response.status === 404) {
        throw 404;
    } else {
        return await response.json();
    }
}
