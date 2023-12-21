import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {FilterDataEvent} from "@/entities/NoteList/model/types";
import {worker} from "@/entities/NoteList/model/webWorketInit";

export const filterNotes = createAsyncThunk<void, FilterDataEvent, { state: RootState }>(
    'notes/filterNotes',
    async (event, {dispatch}) => {
        worker.postMessage(event)
    }
)