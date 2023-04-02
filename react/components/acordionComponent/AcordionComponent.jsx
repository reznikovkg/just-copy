import React from 'react';
import BoxComponent from "../boxComponent/boxComponent";
import'./AcordionStyle.scss'
const AcordionComponent = ({data}) => {
    return (
        <div className="acordion">
            {data.map( (item)=>{
                return <BoxComponent key = {item.id} title={item.title} outContent={item.content}/>
            } )}
        </div>
    );
};

export default AcordionComponent;