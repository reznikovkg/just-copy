import './SolverMenuWidget.scss'
import {DoNextStep} from "@/features/zmts/DoNextStep";
import {Solve} from "@/features/zmts/Solve";

export const SolverMenuWidget = () => {
    return (
        <div className={"solver-menu-widget"}>
            <div className={"solver-menu-widget__container"}>
                <DoNextStep/>
                <Solve/>
            </div>
        </div>
    )
}