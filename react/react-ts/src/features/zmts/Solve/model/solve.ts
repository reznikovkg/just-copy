import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";

export const solve = createAsyncThunk<void, void, { state: RootState }>(
    'zmts/solve',
    async (_, {dispatch}) => {
        // todo
        console.log("solving...")
    }
)