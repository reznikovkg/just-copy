import './newsStyle.scss'
import ItemsComponent from "../itemComponent/ItemsComponent";
import React from "react";
const NewsComponent = () => {
    return <>
        <div className={'news'}>
            <div className={'news__left'}>
                <div className={'news__left__top'}>
                    <img className={'news__big-img'} src={'/1.png'} alt={'news1'}/>
                </div>
                <div className={'news__left__down'}>
                    <img className={'news__little-img'} src={'/4.png'} alt={'news4'}/>
                    <img className={'news__little-img'} src={'/5.png'} alt={'news5'}/>
                </div>
            </div>
            <div className={'news__right'}>
                <img className={'news__img'} src={'/2.png'} alt={'news2'}/>
                <img className={'news__img'} src={'/3.png'} alt={'news3'}/>
                <img className={'news__img'} src={'/6.png'} alt={'news6'}/>
            </div>
        </div>
        <ItemsComponent/>
    </>
}

export default NewsComponent