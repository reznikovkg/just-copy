import './modalWindowStyle.css'
import {useState} from "react";
const ModalWindowComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(!showModal);
    };


    return <div>
        <button className={'button_open'} id="myBtn" onClick={onClick}>Открыть модальное окно</button>
        {showModal ?
            <div className={'modal'}>
                <div className="modal-content">
                    <span className="close" onClick={onClick}>&times;</span>
                    <h1>Вы открыли модальное окно!</h1>
                </div>
            </div> : null

        }

    </div>
}

export default ModalWindowComponent