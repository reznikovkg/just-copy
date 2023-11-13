import {Note} from "@/entities/NoteList/model/types";

self.onmessage = (e: MessageEvent<Note[]>) => {
    const notes: Note[] = e.data;
    const filteredNotes = notes.filter((note: Note) => note.id % 3 === 0);
    (self as any).postMessage(filteredNotes);
};