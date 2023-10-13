import "./MainPage.scss"
import {NotificationWidget} from "@/widgets/NotificationWidget/NotificationWidget";
import {ProgressBarWidget} from "@/widgets/ProgressBarWidget/ProgressBarWidget";
import {RatingStarsWidget} from "@/widgets/RatingStarsWidget/RatingStarsWidget";

const MainPage = () => {
    return (
        <div className={"main"}>
            <NotificationWidget/>
            <ProgressBarWidget/>
            <RatingStarsWidget/>
        </div>
    );
};

export default MainPage;