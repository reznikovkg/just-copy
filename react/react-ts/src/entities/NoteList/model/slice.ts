import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "@/entities/NoteList/model/defaultState";
import {Note} from "@/entities/NoteList/model/types";

export const noteListSlice = createSlice({
    name: 'noteList',
    initialState,
    reducers: {
        updateNoteList(state, action: PayloadAction<Note[]>) {
            state.notes = action.payload;
        },
    },
})

export const noteListActions = noteListSlice.actions;
export const noteListReducer = noteListSlice.reducer;