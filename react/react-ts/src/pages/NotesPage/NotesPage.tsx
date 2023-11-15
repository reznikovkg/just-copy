import "./NotesPage.scss"
import {Link} from "react-router-dom";
import {NotesWidget} from "@/widgets/NotesWidget/NotesWidget";

const NotesPage = () => {
    return (
        <div className={"notes-page"}>
            <NotesWidget/>
            <Link to={"/"}>Main</Link>
        </div>
    );
};

export default NotesPage;