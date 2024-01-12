import './itemPage.scss'
import React from "react";
import {useSelector} from "react-redux";
import {itemByIdSelector, itemsArraySelector} from "../../store/ItemsSlice";
import {useParams} from "react-router-dom";
import {addItem} from "../../store/CartSlice";
import {useDispatch} from "react-redux";
const ItemPage = () => {

    const { id } = useParams();
    const item = useSelector(itemByIdSelector(id));
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(addItem({
            id,
            title: item.title,
            price: item.price
        }))
    }

    return <div className={'item-page'}>
        <h1 className={'item-page__title'}>Item</h1>
        <div className={'item-page__item'}>
            <img className={'item-page__item__img'} src={item?.src} alt={'camera'}/>
            <div className={'item-page__item__img'}></div>
            <div className={'item-page__item__text-block'}>
                <h1 className={'item-page__item__text-block__title'}>{item?.title}</h1>
                <div className={'item-page__item__text-block__description'}>{item?.info}
                </div>
                <h1 className={'item-page__item__text-block__price'}>Price: ${item?.price}</h1>
                <span>Old price: ${item?.oldPrice}</span>
                <span>Available: {item?.available}</span>
                <span>Sold: {item?.sold}</span>
                <button className={'item-page__item__text-block__button'} onClick={addItemHandler}>ADD TO CART</button>
            </div>
        </div>
        <hr className={'item-page__line'}></hr>
        <div className={'item-page__reviews'}>
            <h1 className={'item-page__reviews__title'}>Reviews</h1>
            <div className={'item-page__reviews__block'}>
                <img className={'item-page__reviews__block__arrow'} src={'/rleft.png'} alt={'left'}/>
                <img className={'item-page__reviews__block__review'} src={'/review1.png'} alt={'review1'}/>
                <img className={'item-page__reviews__block__review'} src={'/review2.png'} alt={'review2'}/>
                <img className={'item-page__reviews__block__review'} src={'/review3.png'} alt={'review3'}/>
                <img className={'item-page__reviews__block__arrow'} src={'/rright.png'} alt={'right'}/>
            </div>
        </div>


    </div>
}

export default ItemPage