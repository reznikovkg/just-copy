import './headerStyle.scss'
import CartModule from "../cartModule/CartModule";
const HeaderComponent = () => {
    return <div className={'header'}>
            <div className={'header__info'}>
                <div className={'header__info__left'}>
                    <div className={'header__info__item'}>
                        <img className={'header__info__item__png'} src={'/email.png'} alt={'email'}/>
                        contact@gmail.com
                    </div>
                    <div className={'header__info__item'}> Daily Deals </div>
                    <div className={'header__info__item'}> Help & Contact </div>
                </div>
                <div className={'header__info__right'}>
                    <div className={'header__info__item'}>
                        <img className={'header__info__item__png'} src={'/ion_location.png'} alt={'location'}/>
                        Store Location
                    </div>
                    <div className={'header__info__item'}> Order History </div>
                    <div className={'header__info__item'}> $ US Dollar </div>
                    <div className={'header__info__item'}>
                        <img className={'header__info__item__png'} src={'/language.png'} alt={'language'}/>
                        English
                    </div>
                    <div className={'header__info__item'}>
                        Login
                        <img className={'header__info__item__png'} src={'/login.png'} alt={'login'}/>
                    </div>
                </div>
            </div>
            <div className={'header__main'}>
                <img className={'header__main__logo'} src={'/Avansi.png'} alt={'logo'}/>
                <div className={'header__main__search'}>
                    <select className={'header__main__search__select'}>
                        <option value="someOption">All Categories</option>
                        <option value="someOption">Phones</option>
                        <option value="someOption">Computers</option>
                    </select>
                    <input className={'header__main__search__input'} title={'Search'} placeholder={'Keyword here..'}/>
                    <button className={'header__main__search__button'}> Search </button>
                </div>
                <div className={'header__main__contact'}>
                    <img className={'header__main__contact__img'} src={'/phone.png'} alt={'phone'}/>
                    <div className={'header__main__contact__info'}>
                        <div className={'header__main__contact__info__text'}>CALL US NOW</div>
                        <div className={'header__main__contact__info__phone'}>0123-456-789</div>
                    </div>
                </div>
                <CartModule/>
            </div>
            <div className={'header__navigation'}>
                <a className={'header__navigation__item'} href={'/store/departments'}> ALL DEPARTMENTS </a>
                <a className={'header__navigation__item'} href={'/store'}> HOME </a>
                <a className={'header__navigation__item'}> LAYOUT </a>
                <a className={'header__navigation__item'}> FEATURES </a>
                <a className={'header__navigation__item'}> COLLECTIONS </a>
                <a className={'header__navigation__item'}> BLOG </a>
                <a className={'header__navigation__item'}> PAGES </a>
                <a className={'header__navigation__item'}> MARKETPLACE </a>
            </div>
    </div>
}

export default HeaderComponent