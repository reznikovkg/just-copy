import "./EventPage.scss"
import {EventWidget} from "@/widgets/EventWidget/EventWidget";
import {Link} from "react-router-dom";

const EventPage = () => {
    return (
        <div className={"event"}>
            <EventWidget/>

            <Link to={"/"}>Main</Link>
        </div>
    );
};

export default EventPage;