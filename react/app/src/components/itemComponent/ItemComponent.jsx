import './ItemStyles.scss';
import {useDispatch} from "react-redux";
import {addItem} from "../../features/CartSlice";
const ItemsComponent = ({id, title, src, price, oldPrice, available, sold, rating}) => {
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(addItem({
            id,
            title,
            price
        }))
    }

    return (
        <div className={"item"}>
            <div className={"item__icon"}>
                <img className={"item__icon__img"} src={src} alt={title}/>
                <div className={"item__icon__sale"}>{Math.round((price / oldPrice) * 100 - 100)}%</div>
            </div>
            <div className={"item__info"}>
                <div className={"item__info__main"}>
                    <div className={"item__info__main__rating"}>{Array.from(new Array(5), (_, i) => i + 1).map((value) => (
                        <img className={"item__info__main__rating__star"}
                             src={value <= rating ? "/star_active.svg" : "/star.svg"} alt={"star"}/>
                    ))}</div>
                    <a className={"item__info__main__title"} href={`store/item/${id}`}>{title}</a>
                    <div className={"item__info__main__price"}>
                        <div className={"item__info__main__price__new"}>${price.toFixed(2)}</div>
                        <div className={"item__info__main__price__old"}>${oldPrice.toFixed(2)}</div>
                    </div>
                    <div className={"item__info__main__sales"}>
                        <div className={"item__info__main__sales__available"}>Available: {available}</div>
                        <div className={"item__info__main__sales__sold"}>Sold: {sold}</div>
                    </div>
                </div>
                <div className={"item__info__buttons"}>
                    <button className={'item__info__buttons__button item__info__buttons__green-button'} onClick={addItemHandler}>Add to cart</button>
                    <button className={'item__info__buttons__button item__info__buttons__other-button'}>
                        <img className={'item__info__buttons__button__img'} src={"/like.svg"} alt={"like"}/>
                    </button>
                    <button className={'item__info__buttons__button item__info__buttons__other-button'}>
                        <img className={'item__info__buttons__button__img'} src={"/refresh.svg"} alt={"refresh"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemsComponent;