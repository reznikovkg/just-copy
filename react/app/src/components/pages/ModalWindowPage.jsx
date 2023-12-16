import '../modalWindowComponent/modalWindowStyle.scss'
import {useState} from "react";
import ModalWindowComponent from "../modalWindowComponent/modalWindowComponent";
const ModalWindowPage = () => {
    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(!showModal);
    };

    return <div>
        <button className={'button_open'} id="myBtn" onClick={onClick}>Открыть модальное окно</button>
        <ModalWindowComponent showModal={showModal} onClick={onClick}/>
    </div>
}

export default ModalWindowPage