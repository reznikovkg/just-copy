import LinkComponent from "../linkComponent/LinkComponent";


const MainPageComponent = () => {

    return (
        <div className="main_page">
            <LinkComponent link="/acordions" > Акордион </LinkComponent>
            <LinkComponent link="/notifications">Уведомления</LinkComponent>
        </div>
    );
};

export default MainPageComponent;
