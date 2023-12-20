import './modalWindowStyle.scss'
const ModalWindowComponent = ({showModal, onClick, message}) => {
    return <div>
        {showModal ?
            <div className={'modal'}>
                <div className={'modal__content'}>
                    <h1>{message}</h1>
                    <span className={'modal__close-button'} onClick={onClick}>&times;</span>
                </div>
            </div> : null
        }
    </div>
}

export default ModalWindowComponent