import {combineReducers} from "@reduxjs/toolkit";
import {baseApi} from "@/shared/api";
import {noteListSlice} from "@/entities/NoteList/model/slice";

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [noteListSlice.name]: noteListSlice.reducer
})