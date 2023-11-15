import React from "react";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch} from "@/shared/model/hooks";
import {sortNotes} from "@/features/notes/SortNotes/model/sortNotes";
import {SortDataEvent} from "@/entities/NoteList/model/types";

export const SortNotes = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        const sortDataEvent: SortDataEvent = {
            cmd: "sortData",
            payload: "asc"
        }
        dispatch(sortNotes(sortDataEvent));
    }

    return (
        <Button
            onClick={onClick}
            text={"Сортировать по id"}
        />
    )
}

