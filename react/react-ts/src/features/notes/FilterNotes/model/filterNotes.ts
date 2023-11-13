import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {Note} from "@/entities/NoteList/model/types";
import {noteListActions} from "@/entities/NoteList/model/slice";

export const filterNotes = createAsyncThunk<void, Note[], { state: RootState }>(
    'notes/filterNotes',
    async (notes, {dispatch}) => {
        const {updateNoteList} = noteListActions;
        const worker = new Worker('/src/features/notes/FilterNotes/model/filterWebWorker.ts');
        worker.postMessage(notes)
        worker.onmessage = (e) => {
            const sortedNotes: Note[] = e.data;
            dispatch(updateNoteList(sortedNotes))
        }
    }
)