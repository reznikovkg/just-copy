import './ItemsStyles.scss';
import {useSelector} from "react-redux";
import {itemsArraySelector} from "../../features/ItemsSlice";
import ItemComponent from "./ItemComponent";

const ItemsComponent = () => {
    const items = useSelector(itemsArraySelector);

    return (
        <div className={"items"}>
            <div className={"items__title"}><span>Weekly Deals</span></div>
            <div className={"items__all"}>
                {items.map((data) => (<ItemComponent {...data} />))}
            </div>
        </div>
    )
}

export default ItemsComponent;