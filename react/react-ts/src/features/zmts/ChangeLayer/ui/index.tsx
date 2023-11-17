import React from "react";
import {useAppDispatch, useAppSelector} from "@/shared/model/hooks";
import Button from "@/shared/ui/Button/Button";
import {UpdateType} from "@/entities/Matrix/model/types";
import {changeLayer} from "@/features/zmts/ChangeLayer/model/changeLayer";
import {currentLayer, dimensions} from "@/entities/Matrix/model/slice";

export type ChangeLayerProps = {
    type: UpdateType
};

export const ChangeLayer = (props: ChangeLayerProps) => {
    const dispatch = useAppDispatch();
    const {l} = useAppSelector(dimensions);
    const layer = useAppSelector(currentLayer)
    const handleOnClick = () => {
        dispatch(changeLayer(props.type));
    }

    return (
        <Button
            onClick={handleOnClick}
            text={
                props.type == UpdateType.add
                    ? "+1"
                    : "-1"
            }
            disabled={
                (layer <= 0 && props.type === UpdateType.sub) ||
                (layer + 1 >= l && props.type === UpdateType.add)
            }
        />
    )
}