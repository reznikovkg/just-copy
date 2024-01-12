import {useSelector} from "react-redux";
import {getItemsArray, getTotalAmount} from "../../store/CartSlice";
import ItemInCartComponent from "../itemInCartComponent/itemInCartComponent";

const CartPage = () => {
    const items = useSelector(getItemsArray);
    const totalAmount = useSelector(getTotalAmount);

    return (
        <div className={'cart-page'}>
            <div className={'cart-page__title'}>Cart</div>
            {items.map(({id}) => (<ItemInCartComponent id={id}/>))}
            <div className={'cart-page__total-amount'}>Total amount:
                <b>${totalAmount.toFixed(2)}</b></div>
            <button className={'cart-page__green-button'}>Buy</button>
        </div>
    );
}

export default CartPage;