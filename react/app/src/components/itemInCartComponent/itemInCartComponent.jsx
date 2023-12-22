import '../itemComponent/ItemStyles.scss';
import './ItemInCartStyles.scss';
import {useSelector} from "react-redux";
import {itemByIdSelector} from "../../features/ItemsSlice";
import {getCartItemById} from "../../features/CartSlice";

const ItemInCartComponent = ({id}) => {
    const { title, price, src } = useSelector(itemByIdSelector(id));
    const { count } = useSelector(getCartItemById(id));

    return (
        <div className={"item"}>
            <div className={"item__icon"}>
                <img className={"item__icon__img"} src={src} alt={title}/>
            </div>
            <div className={"item__info"}>
                <div className={"item__info__main"}>
                    <div className={"item__info__main__title"}>{title}</div>
                    <div className={"item__info__main__price"}>
                        <div className={"item__info__main__price__new"}>${price.toFixed(2)} * {count} = ${(price * count).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemInCartComponent;