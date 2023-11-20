import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";

export const doNextStep = createAsyncThunk<void, void, { state: RootState }>(
    'zmts/doNextStep',
    async (_, {dispatch}) => {
        // todo:
        console.log("solving next step")
    }
)