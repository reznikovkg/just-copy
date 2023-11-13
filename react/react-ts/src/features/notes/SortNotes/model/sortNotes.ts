import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {Note} from "@/entities/NoteList/model/types";
import {noteListActions} from "@/entities/NoteList/model/slice";

export const sortNotes = createAsyncThunk<void, Note[], { state: RootState }>(
    'notes/sortNotes',
    async (notes, {dispatch}) => {
        const {updateNoteList} = noteListActions;
        const worker = new Worker('/src/features/notes/SortNotes/model/sortWebWorker.ts');
        worker.postMessage(notes)
        worker.onmessage = (e) => {
            const sortedNotes: Note[] = e.data;
            dispatch(updateNoteList(sortedNotes))
        }
    }
)