import React from 'react';
import AccordionComponent from "../accordionComponent/AccordionComponent";
import LinkComponent from "../linkComponent/LinkComponent";
import {data_1, data_2} from "../../data/data";
import Store from "../../store/Store";


const AсcordionPageComponent = () => {
    return (
        <div className="acordion_page">
            <AccordionComponent data={data_2}/>
            <AccordionComponent data={data_1}/>
            <AccordionComponent data={Store.getDatas()}/>
            <LinkComponent link="/"> Наглавную </LinkComponent>
        </div>
    );
};

export default AсcordionPageComponent;