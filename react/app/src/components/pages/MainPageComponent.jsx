import LinkComponent from "../linkComponent/LinkComponent";


const MainPageComponent = () => {
    return (
        <div className="main_page">
            <LinkComponent link="/acordions" > Акордион </LinkComponent>
            <LinkComponent link="/modalWindow" > Модальное окно </LinkComponent>
        </div>
    );
};

export default MainPageComponent;