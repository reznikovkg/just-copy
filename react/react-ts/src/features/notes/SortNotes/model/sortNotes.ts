import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {SortDataEvent} from "@/entities/NoteList/model/types";
import {worker} from "@/entities/NoteList/model/webWorketInit";

export const sortNotes = createAsyncThunk<void, SortDataEvent, { state: RootState }>(
    'notes/sortNotes',
    async (event, {dispatch}) => {
        worker.postMessage(event)
    }
)