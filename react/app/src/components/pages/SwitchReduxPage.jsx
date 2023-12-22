import {useDispatch, useSelector} from 'react-redux'

import SlideSwitch from "../Switch/SlideSwitch";
import CheckboxSwitch from "../Switch/CheckboxSwitch";
import {toggleChange} from "../../features/SwitcherSlice";

const SwitchReduxPage = () => {
    const switcher = useSelector((state) => state.switcher.value)
    const dispatch = useDispatch()

    const onToggleChange = () => {
        dispatch(toggleChange(!switcher));
    };

    return <>
        <h1>Лабораторная работа №2</h1>
        <h2>Переключатели (redux)</h2>
        <SlideSwitch isChecked={switcher} onToggleChange={onToggleChange}/>
        <CheckboxSwitch isChecked={switcher} onToggleChange={onToggleChange}/>
    </>
}

export default SwitchReduxPage