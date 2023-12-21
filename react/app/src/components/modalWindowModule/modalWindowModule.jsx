import {useId} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, modalDataByIdSelector, openModal} from "../../features/ModalWindowSlice";
import ModalWindowComponent from "../modalWindowComponent/modalWindowComponent";

const ModalWindowModule = ({id}) => {
    const nextId = useId();
    const dispatch = useDispatch()
    const { title, content } = useSelector(modalDataByIdSelector(id));

    const openModalHandler = () => {
        dispatch(openModal({ id: nextId, title: 'Модальное окно', content: `Уникальный id: "${nextId}"` }))
    }

    const closeModalHandler = () => {
        dispatch(closeModal(id))
    }

    return <ModalWindowComponent
        onOpenModal={openModalHandler}
        onCloseModal={closeModalHandler}
        title={title}
        content={content}
    />
}

export default ModalWindowModule