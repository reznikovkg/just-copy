import LinkComponent from "../linkComponent/LinkComponent";


const MainPageComponent = () => {
    return (
        <div className="main_page">
            <LinkComponent link="/acordions" > Акордион </LinkComponent>
            <LinkComponent link="/switch" > Переключатели </LinkComponent>
            <LinkComponent link="/modalWindowRedux" > Модальное окно (Redux) </LinkComponent>
            <LinkComponent link="/store" > Магазин техники </LinkComponent>
        </div>
    );
};

export default MainPageComponent;