import './style.css'

import {useState} from "react";

const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onToggleChange = () => {
        setIsChecked(!isChecked);
    };

    return <div className={'switch'}>
        <label className="slide-switch">
            <input type="checkbox" checked={isChecked} onClick={onToggleChange}/>
            <span className="slider round"/>
        </label>
        <label className={`checkbox-switch`}>
            <input type={'checkbox'} checked={isChecked} onClick={onToggleChange}/>
            <span className={`checkbox-label${isChecked ? ' checked' : ''}`}>Переключатель</span>
        </label>
    </div>
}

export default Switch