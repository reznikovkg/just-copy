import {Note} from "@/entities/NoteList/model/types";

self.onmessage = (e: MessageEvent<Note[]>) => {
    const notes: Note[] = e.data;
    const sortedNotes = notes.sort((a, b) => a.id - b.id);
    (self as any).postMessage(sortedNotes);
};