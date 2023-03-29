import React from 'react';
import AcordionComponent from "../acordionComponent/AcordionComponent";
import LinkComponent from "../linkComponent/LinkComponent";
import {data_1, data_2} from "../../data/data";
import Store from "../../store/Store";


const AcordionPageComponent = () => {
    return (
        <div className="acordion_page">
            <AcordionComponent data={data_2}/>
            <AcordionComponent data={data_1}/>
            <AcordionComponent data={Store.getDatas()}/>
            <LinkComponent link="/"> Наглавную </LinkComponent>
        </div>
    );
};

export default AcordionPageComponent;