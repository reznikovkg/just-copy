import './modalWindowStyle.scss'
const ModalWindowComponent = ({showModal, onCloseModal, onOpenModal, message}) => {
    return <div>
        {showModal ?
            <div className={'modal'}>
                <div className={'modal__content'}>
                    <div className={'modal__header'}>
                        <h1>{message}</h1>
                        <span className={'modal__close-button'} onClick={onCloseModal}>&times;</span>
                    </div>
                     <button className={'open-button'} onClick={onOpenModal}>Открыть модальное окно</button>
                </div>
            </div> : null
        }
    </div>
}

export default ModalWindowComponent