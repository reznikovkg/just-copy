import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {matrixSliceActions} from "@/entities/Matrix/model/slice";
import {Cell} from "@/entities/Matrix/model/types";

export const changeInput = createAsyncThunk<void, Cell, { state: RootState }>(
    'zmts/changeInput',
    async (ival, {dispatch}) => {
        const {updateMatrix} = matrixSliceActions;
        dispatch(updateMatrix(ival))
    }
)