import './MatrixWidget.scss'
import {useAppSelector} from "@/shared/model/hooks";
import {dimensions, viewLayer} from "@/entities/Matrix/model/slice";
import {convert} from "@/widgets/MatrixWidget/lib/util";
import {cn} from "@/shared/lib/util";
import {MatrixInput} from "@/features/zmts/ChangeInput";

export type MatrixWidgetProps = {
    className?: string
}

export const MatrixWidget = (props: MatrixWidgetProps) => {
    const {m, n} = useAppSelector(dimensions)
    const matrix = useAppSelector(viewLayer);

    return (
        <div className={cn("zmts-matrix-widget", props.className)} >
            <div className={"zmts-matrix-widget__container"} style={{
                gridTemplateColumns: `repeat(${n}, 1fr)`,
                gridTemplateRows: `repeat(${m}, 1fr)`,
            }}>
                {
                    Array.from({length: m*n}, (_, index) => index).map((index) => {
                        const {i, j} = convert(index, m, n);
                        return (
                            <MatrixInput key={`${index}`} className={`${index}`} i={i} j={j} value={matrix[i][j]}/>
                        )
                    })
                }
            </div>
        </div>
    )
}