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

            <Link to={"/events"}>Events</Link>
        </div>
    );
};

export default MainPage;