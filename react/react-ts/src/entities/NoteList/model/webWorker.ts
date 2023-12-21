import {Note, WebWorkerEvent} from "@/entities/NoteList/model/types";

let data: Note[] = []

const handleSetDataEvent = (notes: Note[]) => {
    data = notes;
}

const handleSortDataEvent = (direction: string) => {
    if (direction == 'asc') {
        data = data.sort((a, b) => a.id - b.id);
    } else {
        data = data.sort((a, b) => b.id - a.id);
    }
}

const handleFilterDataEvent = (type: string) => {
    if (type == 'blue') {
        data = data.filter((note: Note) => note.id % 3 === 0);
    } else if (type == 'red') {
        data = data.filter((note: Note) => note.id % 3 === 1);
    } else if (type == 'blue') {
        data = data.filter((note: Note) => note.id % 3 === 2);
    } else if (type == 'yellow') {
        data = data.filter((note: Note) => note.id % 3 === 3);
    }
}

self.onmessage = (e: MessageEvent<WebWorkerEvent<any>>) => {
    const {cmd, payload} = e.data;
    switch (cmd) {
        case 'setData': {
            handleSetDataEvent(payload);
            break;
        }
        case 'sortData': {
            handleSortDataEvent(payload)
            break;
        }
        case 'filterData': {
            handleFilterDataEvent(payload)
            break;
        }
        default: {
            console.log("Incorrect cmd. Allowed types: setData, sortData, filterData")
            break;
        }
    }
    (self as any).postMessage(data);
}
