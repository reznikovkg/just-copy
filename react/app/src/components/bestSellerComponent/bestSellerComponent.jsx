import './bestSellerStyle.scss'
const BestSellerComponent = () => {
    return <div className={'best-seller'}>
        <div className={'best-seller__left'}>
                <div className={'best-seller__left__top'}>
                    <h1>Best Seller</h1>
                    <div className={'best-seller__left__top__categories'}>
                        <div className={'best-seller__left__top__categories__border'}>
                            <div className={'best-seller__left__top__categories__item'}>LAPTOP & NOTEBOOK</div>
                        </div>
                        <div className={'best-seller__left__top__categories__item'}>MOBILE & ACCESSORIES</div>
                        <div className={'best-seller__left__top__categories__item'}>WATCHERS</div>
                    </div>
                </div>
        <hr className={'best-seller__left__long-line'}></hr>
        <hr className={'best-seller__left__short-line'}></hr>
            <div className={'best-seller__left__down'}>
                <div className={'best-seller__left__down__list'}>
                    <div className={'best-seller__left__down__list__item'}>
                        <img className={'best-seller__left__down__list__item__img'} src={'/comp.png'} alt={'computers'}/>
                        <img className={'best-seller__left__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                        <div className={'best-seller__left__down__list__item__title'}>Apple iMac 24" Retina 4,5K, M1 (8C CPU, 8C GPU), 8 ГБ, 256 ГБ SSD, синий</div>
                        <div className={'best-seller__left__down__list__item__price'}>$45.00</div>
                    </div>
                    <div className={'best-seller__left__down__list__item'}>
                        <img className={'best-seller__left__down__list__item__img'} src={'/headphones.png'} alt={'headphones'}/>
                        <img className={'best-seller__left__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                        <div className={'best-seller__left__down__list__item__title'}>Беспроводные наушники Apple AirPods Max, Lightning, серебристый</div>
                        <div className={'best-seller__left__down__list__item__price'}>$52.00</div>
                    </div>
                    <div className={'best-seller__left__down__list__item'}>
                        <img className={'best-seller__left__down__list__item__img'} src={'/kvadrokopter.png'} alt={'kvadrokopter'}/>
                        <img className={'best-seller__left__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                            <div className={'best-seller__left__down__list__item__title'}>Квадрокоптер Syma X15A Ultra Max, черный/белый/серебристый</div>
                        <div className={'best-seller__left__down__list__item__price'}>$46.00</div>
                    </div>
                    <div className={'best-seller__left__down__list__item'}>
                        <img className={'best-seller__left__down__list__item__img'} src={'/tv.png'} alt={'tv'}/>
                        <img className={'best-seller__left__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                        <div className={'best-seller__left__down__list__item__title'}>Телевизор Samsung UE65CU8500UXRU 65" 4K Crystal UHD LED Smart TV</div>
                        <div className={'best-seller__left__down__list__item__price'}>$98.00</div>
                    </div>
                    <div className={'best-seller__left__down__list__item'}>
                        <img className={'best-seller__left__down__list__item__img'} src={'/cameras.png'} alt={'cameras'}/>
                        <img className={'best-seller__left__down__list__item__img-stars'} src={'/stars.png'} alt={'stars'}/>
                        <div className={'best-seller__left__down__list__item__title'}>Камера наружного наблюдения Xiaomi Outdoor Camera AW300 BHR6816EU</div>
                        <div className={'best-seller__left__down__list__item__price'}>$90.00</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'best-seller__right'}>
            <div className={'best-seller__right__ad'}>
                <h2 className={'best-seller__right__ad__title'}>iWATCH</h2>
                <h4 className={'best-seller__right__ad__description'}>Super smart watch</h4>
                <h2 className={'best-seller__right__ad__price'}>$499.89</h2>
                <img className={'best-seller__right__ad__img'} src={'/iwatch.png'} alt={'watchad'}/>
            </div>
            <div className={'best-seller__right__more'}>
                <h3 className={'best-seller__right__more__title'}>Most Viewed</h3>
                <div className={'best-seller__right__more__arrows'}>
                    <img className={'best-seller__right__more__arrows-left'} src={'/left.png'} alt={'left'}/>
                    <img className={'best-seller__right__more__arrows-right'} src={'/right.png'} alt={'right'}/>
                </div>
            </div>
            <hr className={'best-seller__right__line'}></hr>
        </div>
    </div>
}

export default BestSellerComponent