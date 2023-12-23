import {combineReducers} from "@reduxjs/toolkit";
import {baseApi} from "@/shared/api";
import {noteListSlice} from "@/entities/NoteList/model/slice";
import {matrixSlice} from "@/entities/Matrix/model/slice";

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [noteListSlice.name]: noteListSlice.reducer,
    [matrixSlice.name]: matrixSlice.reducer
})