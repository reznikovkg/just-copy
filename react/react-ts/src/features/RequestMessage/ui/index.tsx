import React from "react";
import {requestMessage} from "@/features/RequestMessage/model/receiveMessage";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch} from "@/shared/model/hooks";

export const RequestMessage = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(requestMessage());
    }

    return (
        <Button
            onClick={onClick}
            text={"Запросить сообщение"}
        />
    )
}

