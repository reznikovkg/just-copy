import './MatrixModificationWidget.scss'
import {useAppSelector} from "@/shared/model/hooks";
import {currentLayer, dimensions} from "@/entities/Matrix/model/slice";
import {Dimension, UpdateType} from "@/entities/Matrix/model/types";
import {UpdateDimension} from "@/features/zmts/UpdateDimension";
import {ChangeLayer} from "@/features/zmts/ChangeLayer";

export const MatrixModificationWidget = () => {
    const {m, n, l} = useAppSelector(dimensions);
    const layer = useAppSelector(currentLayer)

    const getDimensionValue = (dim: Dimension) => {
        switch (dim) {
            case Dimension.m:
                return m;
            case Dimension.n:
                return n;
            default:
                return l;
        }
    };

    return (
        <div className={"matrix-column-modification-widget"}>
            <div className={"matrix-column-modification-widget__container"}>
                {[Dimension.m, Dimension.n, Dimension.l].map(dimension => {
                    return (
                        <>
                            <div>
                                {dimension}: {getDimensionValue(dimension)}
                            </div>
                            <UpdateDimension dimension={dimension} updateType={UpdateType.add}/>
                            <UpdateDimension dimension={dimension} updateType={UpdateType.sub}/>
                        </>
                    )
                })}
                <div>k: {layer}</div>
                <ChangeLayer type={UpdateType.add}/>
                <ChangeLayer type={UpdateType.sub}/>
            </div>
        </div>
    )
}