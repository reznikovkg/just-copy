export type NoteListState = {
    notes: Note[];
}

export type Note = {
    id: number,
    text: string,
}

export type WebWorkerEvent<T> = {
    cmd: string,
    payload: T
}

export type SetDataEvent = WebWorkerEvent<Note[]> & {
    cmd: 'setData'
}

export type SortDataEvent = WebWorkerEvent<string> & {
    cmd: 'sortData'
}

export type FilterDataEvent = WebWorkerEvent<string> & {
    cmd: 'filterData'
}