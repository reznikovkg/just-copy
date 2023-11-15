import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/app/appStore";
import {FilterDataEvent, Note} from "@/entities/NoteList/model/types";
import {noteListActions} from "@/entities/NoteList/model/slice";
import {worker} from "@/entities/NoteList/model/webWorketInit";

export const filterNotes = createAsyncThunk<void, Note[], { state: RootState }>(
    'notes/filterNotes',
    async (notes, {dispatch}) => {
        const {updateNoteList} = noteListActions;
        const filterDataEvent: FilterDataEvent = {
            cmd: "filterData",
            payload: "blue"
        }
        worker.postMessage(filterDataEvent)
        worker.onmessage = (e) => {
            const sortedNotes: Note[] = e.data;
            dispatch(updateNoteList(sortedNotes))
        }
    }
)