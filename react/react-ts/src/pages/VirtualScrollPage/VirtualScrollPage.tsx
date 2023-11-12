import "./VirtualScrollPage.scss"
import {Link} from "react-router-dom";
import {VirtualScrollWidget} from "@/widgets/VirtualScrollWidget/VirtualScrollWidget";

const VirtualScrollPage = () => {
    return (
        <div className={"virtual-scroll"}>
            <VirtualScrollWidget/>

            <Link to={"/"}>Main</Link>
        </div>
    );
};

export default VirtualScrollPage;