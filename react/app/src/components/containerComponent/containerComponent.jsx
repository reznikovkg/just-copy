import React from 'react';
import BoxComponent from "../boxComponent/boxComponent";
import'./containerStyle.scss'
const ContainerComponent = ({data}) => {
    return (
        <div className="container">
            {data.map( (item)=>{
                return <BoxComponent key = {item.id} title={item.title} outContent={item.content}/>
            } )}
        </div>
    );
};

export default ContainerComponent;