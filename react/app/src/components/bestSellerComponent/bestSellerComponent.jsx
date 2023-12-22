import './bestSellerStyle.scss'
const BestSellerComponent = () => {
    return <div className={'best-seller'}>
                <div className={'best-seller__top'}>
                    <h1>Best Seller</h1>
                    <div className={'best-seller__top__categories'}>
                        <a className={'best-seller__top__categories__item'}>LAPTOP & NOTEBOOK</a>
                        <a className={'best-seller__top__categories__item'}>MOBILE & ACCESSORIES</a>
                        <a className={'best-seller__top__categories__item'}>WATCHERS</a>
                    </div>
                </div>
                <div className={'best-seller__down'}>
                    <div className={'best-seller__down__list'}>
                        <div className={'best-seller__down__list__item'}>
                            <img className={'best-seller__down__list__item__img'} src={'/item1.png'} alt={'item1'}/>
                            <img className={'best-seller__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                            <div className={'best-seller__down__list__item__title'}>COMPUTERS</div>
                            <div className={'best-seller__down__list__item__price'}>$45.00</div>
                        </div>
                        <div className={'best-seller__down__list__item'}>
                            <img className={'best-seller__down__list__item__img'} src={'/item2.png'} alt={'item2'}/>
                            <img className={'best-seller__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                            <div className={'best-seller__down__list__item__title'}>HEADPHONES</div>
                            <div className={'best-seller__down__list__item__price'}>$52.00</div>
                        </div>
                        <div className={'best-seller__down__list__item'}>
                            <img className={'best-seller__down__list__item__img'} src={'/item3.png'} alt={'item3'}/>
                            <img className={'best-seller__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                            <div className={'best-seller__down__list__item__title'}>ROBOT</div>
                            <div className={'best-seller__down__list__item__price'}>$46.00</div>
                        </div>
                        <div className={'best-seller__down__list__item'}>
                            <img className={'best-seller__down__list__item__img'} src={'/item4.png'} alt={'item4'}/>
                            <img className={'best-seller__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                            <div className={'best-seller__down__list__item__title'}>TV</div>
                            <div className={'best-seller__down__list__item__price'}>$98.00</div>
                        </div>
                        <div className={'best-seller__down__list__item'}>
                            <img className={'best-seller__down__list__item__img'} src={'/item5.png'} alt={'item5'}/>
                            <img className={'best-seller__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                            <div className={'best-seller__down__list__item__title'}>CAMERAS</div>
                            <div className={'best-seller__down__list__item__price'}>$90.00</div>
                        </div>
                    </div>
                </div>
    </div>
}

export default BestSellerComponent