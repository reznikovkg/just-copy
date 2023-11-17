import "./ZmtsPage.scss"
import {Link} from "react-router-dom";
import {MatrixWidget} from "@/widgets/MatrixWidget/MatrixWidget";
import {MatrixModificationWidget} from "@/widgets/MatrixModificationWidget/MatrixModificationWidget";

const ZmtsPage = () => {
    return (
        <div className={"zmts-page"}>
            <div className={"zmts-container"}>
                <MatrixModificationWidget/>
                <MatrixWidget/>
            </div>
            <Link to={"/"}>Main</Link>
        </div>
    );
};

export default ZmtsPage;