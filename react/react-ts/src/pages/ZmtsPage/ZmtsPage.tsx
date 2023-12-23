import "./ZmtsPage.scss"
import {Link} from "react-router-dom";
import {MatrixWidget} from "@/widgets/MatrixWidget/MatrixWidget";
import {MatrixModificationWidget} from "@/widgets/MatrixModificationWidget/MatrixModificationWidget";
import {SolverMenuWidget} from "@/widgets/SolverMenuWidget/SolverMenuWidget";

const ZmtsPage = () => {
    return (
        <div className={"zmts-page"}>
            <div className={"zmts-container"}>
                <MatrixModificationWidget/>
                <MatrixWidget/>
                <SolverMenuWidget/>
            </div>
            <Link to={"/"}>Main</Link>
        </div>
    );
};

export default ZmtsPage;