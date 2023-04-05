import React from 'react';
import BoxComponent from "../boxComponent/boxComponent";
import'./AccordionStyle.scss'
const AccordionComponent = ({data}) => {
    return (
        <div className="accordion">
            {data.map( (item)=>{
                return <BoxComponent key = {item.id} title={item.title} outContent={item.content}/>
            } )}
        </div>
    );
};

export default AccordionComponent;