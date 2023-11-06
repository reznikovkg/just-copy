import {baseApi} from "@/shared/api";
import {io, Socket} from "socket.io-client";
import {config} from "@/shared/lib/config";


let socket: Socket;

const getSocket = () => {
    if (!socket) {
        try {
            socket = io(config.API_ENDPOINT, {
                withCredentials: false,
            });
        } catch (err) {
            console.log(err)
        }
    }
    return socket;
};

export const messageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        sendMessage: build.mutation<string, string>({
            queryFn: (message: string) => {
                return new Promise(resolve => {
                    getSocket().emit('message', message, (message: string) => {
                        resolve({data: message});
                    });
                })
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

                getSocket().on('message', (message: string) => {
                    updateCachedData((draft) => {
                        draft.push(message)
                    })
                });
            }
        }),
    }),
});

export const {useGetMessagesQuery} = messageApi;