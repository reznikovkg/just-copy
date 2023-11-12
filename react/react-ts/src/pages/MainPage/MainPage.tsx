import "./MainPage.scss"
import {NotificationWidget} from "@/widgets/NotificationWidget/NotificationWidget";
import {ProgressBarWidget} from "@/widgets/ProgressBarWidget/ProgressBarWidget";
import {RatingStarsWidget} from "@/widgets/RatingStarsWidget/RatingStarsWidget";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={"main"}>
            <NotificationWidget/>
            <ProgressBarWidget/>
            <RatingStarsWidget/>
            <div className={"main__nav"}>
                <Link to={"/events"}>Events</Link>
                <Link to={"/notes"}>Notes</Link>
            </div>
        </div>
    );
};

export default MainPage;