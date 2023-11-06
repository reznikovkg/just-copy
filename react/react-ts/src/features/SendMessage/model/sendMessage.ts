import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {messageApi} from "@/entities/Message";

export const sendMessage = createAsyncThunk<void, string, { state: RootState }>(
    'messages/sendMessage',
    async (message: string, {dispatch}) => {
        try {
            await dispatch(messageApi.endpoints.sendMessage.initiate(message)).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
)