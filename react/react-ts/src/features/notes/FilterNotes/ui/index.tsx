import React from "react";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch} from "@/shared/model/hooks";
import {filterNotes} from "@/features/notes/FilterNotes/model/filterNotes";
import {FilterDataEvent} from "@/entities/NoteList/model/types";

export const FilterNotes = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        const filterDataEvent: FilterDataEvent = {
            cmd: "filterData",
            payload: "blue"
        }
        dispatch(filterNotes(filterDataEvent));
    }

    return (
        <Button
            onClick={onClick}
            text={"Оставить только голубые"}
        />
    )
}

