import LinkComponent from "../linkComponent/LinkComponent";
import {observer} from "mobx-react-lite";
import {memo} from "react";


const MainPageComponent = () => {
    return (
        <div className="main_page">
            <LinkComponent link="/accordions" > Акордион </LinkComponent>
        </div>
    );
};

export default memo(observer(MainPageComponent));