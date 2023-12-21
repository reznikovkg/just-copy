import {useDispatch, useSelector} from 'react-redux'

import {toggleChange} from "../../features/modalWindowSlice";
import ModalWindowComponent from "../modalWindowComponent/modalWindowComponent";

const ModalWindowReduxPage = () => {
    const modalWindow = useSelector((state) => state.modalWindow.value)
    const dispatch = useDispatch()
    const message = useSelector((state) => state.modalWindow.message)

    const onClick = () => {
        dispatch(toggleChange(!modalWindow));
    };

    return <>
        <h1>Лабораторная работа №2 Попова Е.В.</h1>
        <h2>Модальное окно (Redux)</h2>
        <ModalWindowComponent showModal={modalWindow} onClick={onClick} message={message}/>
    </>
}
export default ModalWindowReduxPage
