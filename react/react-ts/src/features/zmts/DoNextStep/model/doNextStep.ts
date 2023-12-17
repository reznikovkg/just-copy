import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {matrixSliceActions} from "@/entities/Matrix/model/slice";
import {UpdateType} from "@/entities/Matrix/model/types";

export const doNextStep = createAsyncThunk<void, void, { state: RootState }>(
    'zmts/doNextStep',
    async (_, {dispatch}) => {
        const {updateToNextStep} = matrixSliceActions;
        dispatch(updateToNextStep())
    }
)