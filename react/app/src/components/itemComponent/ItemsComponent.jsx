import './ItemsStyles.scss';
import {useSelector} from "react-redux";
import {itemsArraySelector} from "../../store/ItemsSlice";
import ItemComponent from "./ItemComponent";

const ItemsComponent = () => {
    const items = useSelector(itemsArraySelector);

    return (
        <div className={"items"}>
            <div className={"items__title"}>Weekly Deals</div>
            <div className={"items__all"}>
                {items.map((data) => (<ItemComponent {...data} />))}
            </div>
        </div>
    )
}

export default ItemsComponent;