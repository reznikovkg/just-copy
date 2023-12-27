import {baseApi} from "@/shared/api";
import {config} from "@/shared/lib/config";

let socket: WebSocket;

const getSocket = () => {
    if (!socket) {
        try {
            socket = new WebSocket(config.WS_ENDPOINT);
        } catch (err) {
            console.log(err)
        }
    }
    return socket;
};

export const messageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        sendMessage: build.mutation<void, string>({
            queryFn: (message: string) => {
                getSocket().send(message);
                return { data: undefined };
            },
        }),
        requestMessage: build.mutation<string, void>({
            query: () => '/ws/requestMessage',
        }),
        getMessages: build.query<string[], void>({
            queryFn: () => ({data: []}),
            async onCacheEntryAdded(
                _,
                {updateCachedData, cacheDataLoaded, cacheEntryRemoved}
            ) {
                await cacheDataLoaded;
                getSocket().onmessage = function(event) {
                    updateCachedData((draft) => {
                        draft.push(event.data)
                    })
                };
            }
        }),
    }),
});

export const {useGetMessagesQuery} = messageApi;