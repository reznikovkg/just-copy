import React from "react";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {sortNotes} from "@/features/notes/SortNotes/model/sortNotes";

export const SortNotes = () => {
    const dispatch = useAppDispatch()
    const {notes} = useAppSelector(state => state.noteList);

    const onClick = () => {
        dispatch(sortNotes(notes));
    }

    return (
        <Button
            onClick={onClick}
            text={"Сортировать по id"}
        />
    )
}

