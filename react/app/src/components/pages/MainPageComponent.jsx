import LinkComponent from "../linkComponent/LinkComponent";
import {observer} from "mobx-react-lite";



const MainPageComponent = () => {
    return (
        <div className="main_page">
            <LinkComponent link="/accordions" > Акордион </LinkComponent>
        </div>
    );
};

export default observer(MainPageComponent);