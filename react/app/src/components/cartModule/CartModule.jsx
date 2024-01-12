import './CartStyles.scss';
import {useSelector} from "react-redux";
import {getItemCount, getTotalAmount} from "../../store/CartSlice";
import {Link} from "react-router-dom";

const CartModule = () => {
    const count = useSelector(getItemCount);
    const totalAmount = useSelector(getTotalAmount);

    return (
        <div className={'cart'}>
            <Link className="link" to={"/store/cart"}>
                <div className={'cart__icon'}>
                    <img className={'cart__icon__img'} alt={"cart"} src={"/cart.svg"}/>
                    <div className={'cart__icon__counter'}>{count}</div>
                </div>
            </Link>
            <div className={'cart__information'}>
                <div className={'cart__information__title'}>My cart</div>
                <div className={'cart__information__total_amount'}>${totalAmount.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default CartModule;