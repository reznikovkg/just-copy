import '../itemComponent/ItemStyles.scss';
import './ItemInCartStyles.scss';
import {useDispatch, useSelector} from "react-redux";
import {itemByIdSelector} from "../../store/ItemsSlice";
import {addItem, getCartItemById, removeItem} from "../../store/CartSlice";

const ItemInCartComponent = ({id}) => {
    const { title, price, src } = useSelector(itemByIdSelector(id));
    const { count } = useSelector(getCartItemById(id));

    const dispatch = useDispatch();

    const removeItemHandler = () => {
        dispatch(removeItem(id));
    }

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
                    <button className={"item__info__main__delete"} onClick={removeItemHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ItemInCartComponent;