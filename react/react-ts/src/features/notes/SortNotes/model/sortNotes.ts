import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {Note, SortDataEvent} from "@/entities/NoteList/model/types";
import {noteListActions} from "@/entities/NoteList/model/slice";
import {worker} from "@/entities/NoteList/model/webWorketInit";

export const sortNotes = createAsyncThunk<void, Note[], { state: RootState }>(
    'notes/sortNotes',
    async (notes, {dispatch}) => {
        const {updateNoteList} = noteListActions;
        const sortDataEvent: SortDataEvent = {
            cmd: "sortData",
            payload: "asc"
        }
        worker.postMessage(sortDataEvent)
        worker.onmessage = (e) => {
            const sortedNotes: Note[] = e.data;
            dispatch(updateNoteList(sortedNotes))
        }
    }
)