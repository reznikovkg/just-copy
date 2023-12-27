import React from "react";
import Button from "@/shared/ui/Button/Button";
import {useAppDispatch} from "@/shared/model/hooks";
import {sendMessage} from "@/features/SendMessage/model/sendMessage";

export const SendMessage = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(sendMessage("message"));
    }

    return (
        <Button
            onClick={onClick}
            text={"Отправить сообщение"}
        />
    )
}

