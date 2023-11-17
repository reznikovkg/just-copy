import React from "react";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import Button from "@/shared/ui/Button/Button";
import {Dimension, UpdateType} from "@/entities/Matrix/model/types";
import {dimensions} from "@/entities/Matrix/model/slice";
import {updateDimension} from "@/features/zmts/UpdateDimension/model/updateDimension";

export type ChangeLayerProps = {
    dimension: Dimension,
    updateType: UpdateType
};

export const UpdateDimension = (props: ChangeLayerProps) => {
    const dispatch = useAppDispatch();
    const {m, n, l} = useAppSelector(dimensions);
    const handleOnClick = () => {
        if (props.updateType == UpdateType.add) {
            dispatch(updateDimension({dimension: props.dimension, value: +1}));
        } else {
            dispatch(updateDimension({dimension: props.dimension, value: -1}));
        }
    }

    return (
        <Button
            onClick={handleOnClick}
            text={
                props.updateType == UpdateType.add
                    ? `+1`
                    : `-1`
            }
            disabled={
                (m - 1 <= 0 && props.updateType === UpdateType.sub && props.dimension == Dimension.m) ||
                (n - 1 <= 0 && props.updateType === UpdateType.sub && props.dimension == Dimension.n) ||
                (l - 1 <= 0 && props.updateType === UpdateType.sub && props.dimension == Dimension.l)
            }
        />
    )
}