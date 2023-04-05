import React, {useRef, useState} from 'react';
import'./boxStyle.scss'
import IconComponent from "../iconComponent/iconComponent";


const BoxComponent = ({title, outContent}) => {
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
                <div className="box__label">{title}</div>
                <div className="box__sign"> <IconComponent className={rotate} width={5} fill={"#777"} viewBox={"0 0 266 438"}
                                                           xmlns ={"http://www.w3.org/2000/svg"} d={"m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"} /> </div>
            </div>
            <div ref={content} className="box__content" style={{maxHeight : `${heightContent}`}}>
                <div className="text">{outContent}</div>
            </div>
        </div>
    );
};

export default BoxComponent;