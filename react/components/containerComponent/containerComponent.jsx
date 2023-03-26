import React from 'react';
import BoxComponent from "../boxComponent/boxComponent";
import'./containerStyle.scss'
const ContainerComponent = ({data}) => {
    return (
        <div className="container">
            {data.map( (item)=>{
                return <BoxComponent key = {item.id} data = {item}/>
            } )}
        </div>
    );
};

export default ContainerComponent;