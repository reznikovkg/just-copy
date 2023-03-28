import React from 'react';
import ContainerComponent from "../../containerComponent/containerComponent";
import {data_1, data_2} from "../../../app/src/data/data";
import Store from "../../../app/src/store/Store";
import {Link} from "react-router-dom";
import LinkComponent from "../../linkComponent/LinkComponent";

const AcordionsPageComponent = () => {
    return (
        <div className="acordins_page">
            <ContainerComponent data={data_2}/>
            <ContainerComponent data={data_1}/>
            <ContainerComponent data={Store.getDatas()}/>
            <LinkComponent link="/"> Наглавную </LinkComponent>
        </div>
    );
};

export default AcordionsPageComponent;