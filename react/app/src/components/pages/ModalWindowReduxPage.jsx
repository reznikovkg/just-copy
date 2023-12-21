import {useDispatch, useSelector} from 'react-redux'

import ModalWindowComponent from "../modalWindowComponent/modalWindowComponent";
import {addModal, closeModal, openModal} from "../../features/ModalWindowSlice";

const ModalWindowReduxPage = () => {
    const modalWindow = useSelector((state) => state.modalWindow.values)
    const dispatch = useDispatch()
    const message = useSelector((state) => state.modalWindow.message)

    const openModalWindow = (index) => {
        dispatch(openModal(index))
    };
    const closeModalWindow = (index) => {
        dispatch(closeModal(index))
    };
    const addModalWindow  = () => {
        dispatch(addModal())
    };

    return <>
        <h1>Лабораторная работа №2 Попова Е.В.</h1>
        <h2>Модальное окно (Redux)</h2>
        {!modalWindow[0] ?
            <button
                className={'open-button'}
                onClick = {() => openModalWindow(0)}
            >
                Открыть модальное окно
            </button> : null
        }
        {modalWindow.map((m, index) =>
            <ModalWindowComponent
                key={index}
                showModal={m}
                onCloseModal = {() => closeModalWindow(index)}
                onOpenModal = {() => addModalWindow()}
                message={message + " " + (index+1)}
            />
        )}
    </>
}
export default ModalWindowReduxPage
