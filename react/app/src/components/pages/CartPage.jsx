import {useSelector} from "react-redux";
import {getItemsArray, getTotalAmount} from "../../features/CartSlice";
import ItemInCartComponent from "../itemInCartComponent/itemInCartComponent";

const CartPage = () => {
    const items = useSelector(getItemsArray);
    const totalAmount = useSelector(getTotalAmount);

    return (
        <div className={'cartPage'}>
            <div className={'cartPage__title'}><span>Cart</span></div>
            {items.map(({id}) => (<ItemInCartComponent id={id}/>))}
            <div className={'cartPage__totalAmount'}>Total amount: <b>${totalAmount.toFixed(2)}</b></div>
            <button className={'button_green'}>Buy</button>
        </div>
    );
}

export default CartPage;