import React from "react";
import {useAppDispatch} from "@/shared/model/hooks";
import {cn} from "@/shared/lib/util";
import {changeInput} from "@/features/zmts/ChangeInput/model/changeInput";

export type MatrixInputProps = {
    className?: string
    i: number,
    j: number,
    value: number
};

export const MatrixInput = (props: MatrixInputProps) => {
    const dispatch = useAppDispatch()
    const handleChange = (event: any) => {
        dispatch(changeInput({i: props.i, j: props.j, v: event.target.value}));
    }

    return (
        <input
            className={cn(`matrix-input-feature`, props.className)}
            onChange={handleChange}
            value={props.value}
            type={"number"}
        />
    )
}