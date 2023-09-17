import LinkComponent from "@/shared/ui/linkComponent/LinkComponent";

export const MainNavigationWidget = () => {
    return (
        <div className="main_page">
            <LinkComponent link="/accordions">Акордион</LinkComponent>
            <LinkComponent link="/ratings">Оценка</LinkComponent>
        </div>
    );
};