import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {matrixSliceActions} from "@/entities/Matrix/model/slice";
import {Dimension} from "@/entities/Matrix/model/types";

export type Props = {
    dimension: Dimension,
    value: number
}

export const updateDimension = createAsyncThunk<void, Props, { state: RootState }>(
    'zmts/updateDimension',
    async (props, {dispatch}) => {
        const {updateDimension} = matrixSliceActions;
        dispatch(updateDimension(props))
    }
)