import React from "react";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import {filterNotes} from "@/features/notes/FilterNotes/model/filterNotes";

export const FilterNotes = () => {
    const dispatch = useAppDispatch()
    const {notes} = useAppSelector(state => state.noteList);

    const onClick = () => {
        dispatch(filterNotes(notes));
    }

    return (
        <Button
            onClick={onClick}
            text={"Оставить только голубые"}
        />
    )
}

