const urlRegex = /^(http|https):\/\/([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})?|localhost)(:\d+)?(\/.*)?$/;

if (!urlRegex.test(import.meta.env.VITE_API_ENDPOINT)) {
    throw new Error("VITE_API_ENDPOINT is not a valid URL");
}

export const config = {
    API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
    WS_ENDPOINT: import.meta.env.VITE_API_ENDPOINT.replace("http", "ws").replace("https", "ws")
} as const
