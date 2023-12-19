import {useState} from "react";

import CheckboxSwitch from "../Switch/CheckboxSwitch";
import SlideSwitch from "../Switch/SlideSwitch";

const SwitchPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onToggleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={'app'}>
            <h1>Лабораторная работа №1 (вариант 1)</h1>
            <h2>1. Переключатели</h2>
            <SlideSwitch isChecked={isChecked} onToggleChange={onToggleChange}/>
            <CheckboxSwitch isChecked={isChecked} onToggleChange={onToggleChange}/>
        </div>
    );
}

export default SwitchPage