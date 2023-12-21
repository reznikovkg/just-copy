import '../modalWindowComponent/modalWindowStyle.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getModalIds, openModal} from "../../features/ModalWindowSlice";
import {useId} from "react";
import ModalWindowModule from "../modalWindowModule/modalWindowModule";

const ModalWindowReduxPage = () => {
    const id = useId();
    const modalsIds = useSelector(getModalIds)
    const dispatch = useDispatch()

    const openModalHandler  = () => {
        dispatch(openModal({id, title: 'Модальное окно', content: `Уникальный id: "${id}"`}))
    };

    return <>
        <h1>Лабораторная работа №2 Попова Е.В.</h1>
        <h2>Модальное окно (Redux)</h2>
        <button
            className={'open-button'}
            onClick = {openModalHandler}
        >
            Открыть модальное окно
        </button>
        {modalsIds.map((id) =>
            <ModalWindowModule key={id} id={id}/>
        )}
    </>
}
export default ModalWindowReduxPage
