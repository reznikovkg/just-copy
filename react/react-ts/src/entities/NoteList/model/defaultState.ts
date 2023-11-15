import {Note, NoteListState} from "@/entities/NoteList/model/types";
import {shuffle} from "@/shared/lib/util";

const createItems = () => {
    let id = 1;
    let arr: Note[] = Array.from({length: 100_000}, (_) => ({
        id: id++,
        text: "Note"
    }))
    return shuffle(arr);
}

export const initialState: NoteListState = {
    notes: createItems()
}