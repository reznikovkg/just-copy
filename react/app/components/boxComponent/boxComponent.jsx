import React, {useRef, useState} from 'react';
import'./boxStyle.scss'
import IconComponent from "../iconComponent/iconComponent";

const BoxComponent = ({data}) => {
    const [active, setActive] = useState(false);
    const [rotate, setRotate] = useState("accordion__icon")
    const [heightContent, setHeightContent] = useState("0px")
    const content = useRef(null);
    const handleClick = event =>{
        setActive(!active)
        setRotate(active ? "accordion__icon" : "accordion__icon rotate")
        setHeightContent(active ? "0px" : `${content.current.scrollHeight}px`)
    }

    return (
        <div className='box' >
            <div className="box__panel" onClick={handleClick}>
                <div className="box__label">{data.title}</div>
                <div className="box__sign"> <IconComponent className={rotate} width={5} fill={"#777"}/> </div>
            </div>
            <div ref={content} className="box__content" style={{maxHeight : `${heightContent}`}}>
                <p>{data.text}</p>
            </div>
        </div>
    );
};

export default BoxComponent;