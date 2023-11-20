import React from "react";
import {useAppDispatch} from "@/shared/model/hooks";
import Button from "@/shared/ui/Button/Button";
import {doNextStep} from "@/features/zmts/DoNextStep/model/doNextStep";

export const DoNextStep = () => {
    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(doNextStep());
    }

    return (
        <Button onClick={handleOnClick} text={"Следующий шаг"}/>
    )
}