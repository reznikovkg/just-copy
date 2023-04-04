import React, {memo, useContext, useEffect} from 'react';
import AccordionComponent from "../accordionComponent/AccordionComponent";
import LinkComponent from "../linkComponent/LinkComponent";
import {data_1, data_2} from "../../data/data";
import {observer} from "mobx-react-lite";
import CreateAccordionItemPageComponent from "./сreateAccordionItemPageComponent/CreateAccordionItemPageComponent";
import Store from "../../store/Store";
import {autorun} from "mobx";

// <AccordionComponent data={data_2}/>
//             <AccordionComponent data={data_1}/>
//             <AccordionComponent data={Store.getDatas()}/>
const AccordionPageComponent = () => {


    useEffect(  ()=>{
        Store.getAllAccordionItem()
    },[Store?.dataServer])


    return (
        <div className="accordion_page">
            <AccordionComponent data={Store?.dataServer} />
            <CreateAccordionItemPageComponent link="/accordions" > Создание элемента аккордиона </CreateAccordionItemPageComponent>
            <LinkComponent link="/"> На главную </LinkComponent>
        </div>
    );
};


export default memo(observer(AccordionPageComponent));