import './newsStyle.scss'
import ItemsComponent from "../itemComponent/ItemsComponent";
import React from "react";
const NewsComponent = () => {
    return <>
        <div className={'news'}>
            <div className={'news__left'}>
                <div className={'news__left__top'}>
                    <div className={'news__left__top__item'}>
                        <div className={'news__left__top__item__imgContainer'}>
                            <img className={'news__left__top__item__img'} src={'/bg_watch.png'} alt={'tv'}/>
                        </div>
                        <h1 className={'news__left__top__item__title'}>SAVE UP TO 50% OFF</h1>
                        <h4 className={'news__left__top__item__description'}>Super ultra hd tv 4k for you</h4>
                        <div className={'news__left__top__item__button'}>BUY NOW</div>
                    </div>
                </div>
                <div className={'news__left__down'}>
                    <div className={'news__left__down__item'}>
                        <div className={'news__left__down__item__container'}>
                            <img className={'news__left__down__item__container__img'} src={'/bg_phone.png'} alt={'tv'}/>
                        </div>
                        <h1 className={'news__left__down__item__title'}>SAVE UP TO 50% OFF</h1>
                        <h4 className={'news__left__down__item__description'}>Super ultra hd tv 4k for you</h4>
                        <h1 className={'news__left__down__item__price'}>$499.99</h1>
                    </div>
                    <div className={'news__left__down__item'}>
                        <div className={'news__left__down__item__container'}>
                            <img className={'news__left__down__item__container__img'} src={'/bg_camera.png'} alt={'tv'}/>
                        </div>
                        <h1 className={'news__left__down__item__title'}>CHRISTMAS 50% OFF</h1>
                        <h4 className={'news__left__down__item__description'}>Super ultra hd tv 4k for you</h4>
                        <h1 className={'news__left__down__item__price'}>$499.99</h1>
                    </div>
                </div>
            </div>
            <div className={'news__right'}>
                <div className={'news__right__item'}>
                    <div className={'news__right__item__container'}>
                        <img className={'news__right__item__container__img'} src={'/bg_tv.png'} alt={'tv'}/>
                    </div>
                    <h1 className={'news__right__item__title'}>ULTRA HD TV</h1>
                    <h4 className={'news__right__item__description'}>Super ultra hd tv 4k for you</h4>
                    <div className={'news__right__item__button'}>BUY NOW</div>
                </div>
                <div className={'news__right__item'}>
                    <div className={'news__right__item__container'}>
                        <img className={'news__right__item__container__img'} src={'/bg_mac.png'} alt={'mac'}/>
                    </div>
                    <h1 className={'news__right__item__title'}>MACBOOK PRO</h1>
                    <h4 className={'news__right__item__description'}>Super ultra hd mac 4k for you</h4>
                    <div className={'news__right__item__button'}>BUY NOW</div>
                </div>
                <div className={'news__right__item'}>
                    <div className={'news__right__item__container'}>
                        <img className={'news__right__item__container__img'} src={'/bg_head.png'} alt={'headphones'}/>
                    </div>
                    <h1 className={'news__right__item__title'}>HEADPHONES</h1>
                    <h4 className={'news__right__item__description'}>Super ultra headphones</h4>
                    <h1 className={'news__right__item__price'}>$69.99</h1>
                </div>
            </div>
        </div>
    </>
}

export default NewsComponent