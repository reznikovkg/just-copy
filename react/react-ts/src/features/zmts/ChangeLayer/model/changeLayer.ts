import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {matrixSliceActions} from "@/entities/Matrix/model/slice";
import {UpdateType} from "@/entities/Matrix/model/types";

export const changeLayer = createAsyncThunk<void, UpdateType, { state: RootState }>(
    'zmts/changeColDimension',
    async (type, {dispatch}) => {
        const {updateLayer} = matrixSliceActions;
        if (type === UpdateType.add) {
            dispatch(updateLayer(1))
        } else {
            dispatch(updateLayer(-1))
        }
    }
)