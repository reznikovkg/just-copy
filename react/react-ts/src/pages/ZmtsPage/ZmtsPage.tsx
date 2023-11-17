import "./ZmtsPage.scss"
import {Link} from "react-router-dom";
import {MatrixWidget} from "@/widgets/MatrixWidget/MatrixWidget";
import {MatrixModificationWidget} from "@/widgets/MatrixModificationWidget/MatrixModificationWidget";
import {Dimension} from "@/entities/Matrix/model/types";

const ZmtsPage = () => {
    return (
        <div className={"zmts-page"}>
            <div className={"zmts-container"}>
                <MatrixModificationWidget dimension={Dimension.m}/>
                <MatrixWidget className={"zmts-container__zmts_mat"}/>
            </div>
            <Link to={"/"}>Main</Link>
        </div>
    );
};

export default ZmtsPage;