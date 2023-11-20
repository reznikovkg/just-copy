import React from "react";
import {useAppDispatch} from "@/shared/model/hooks";
import Button from "@/shared/ui/Button/Button";
import {solve} from "@/features/zmts/Solve/model/solve";

export const Solve = () => {
    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(solve());
    }

    return (
        <Button onClick={handleOnClick} text={"Решить"}/>
    )
}