import './categoriesStyle.scss'
const CategoriesComponent = () => {
    return <div className={'caterories'}>
        <h1>Top Categories This Week</h1>
        <div className={'caterories__line'}></div>
        <div className={'caterories__list'}>
            <div className={'caterories__list__item'}>
                <img className={'caterories__list__item__img'} src={'/iphones.png'} alt={'iphones'}/>
                <div className={'caterories__list__item__title'}>PHONES</div>
            </div>
            <div className={'caterories__list__item'}>
                <img className={'caterories__list__item__img'} src={'/comp.png'} alt={'computers'}/>
                <div className={'caterories__list__item__title'}>COMPUTERS</div>
            </div>
            <div className={'caterories__list__item'}>
                <img className={'caterories__list__item__img'} src={'/camera.png'} alt={'camera'}/>
                <div className={'caterories__list__item__title'}>CAMERA</div>
            </div>
            <div className={'caterories__list__item'}>
                <img className={'caterories__list__item__img'} src={'/watch.png'} alt={'watch'}/>
                <div className={'caterories__list__item__title'}>SMARTWATCH</div>
            </div>
            <div className={'caterories__list__item'}>
                <img className={'caterories__list__item__img'} src={'/headphones.png'} alt={'headphones'}/>
                <div className={'caterories__list__item__title'}>HEADPHONES</div>
            </div>
        </div>
    </div>
}

export default CategoriesComponent