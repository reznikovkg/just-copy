import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {messageApi} from "@/entities/Message";

export const requestMessage = createAsyncThunk<void, void, { state: RootState }>(
    'messages/requestMessage',
    async (_, {dispatch}) => {
        try {
            await dispatch(messageApi.endpoints.requestMessage.initiate()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
)