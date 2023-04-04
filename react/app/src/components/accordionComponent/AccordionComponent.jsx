import React from 'react';
import BoxComponent from "../boxComponent/boxComponent";
import'./AccordionStyle.scss'
import {observer} from "mobx-react-lite";
const AccordionComponent = ({data}) => {
    return (
        <div className="accordion">
            {data?.map( (item)=>{
                return <BoxComponent key = {item.id} item={item}/>
            } )}
        </div>
    );
};

export default observer(AccordionComponent);