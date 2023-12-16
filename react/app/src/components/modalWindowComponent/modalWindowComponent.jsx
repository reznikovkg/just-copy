import './modalWindowStyle.scss'
const ModalWindowComponent = ({showModal, onClick, message}) => {
    return <div>
        {showModal ?
            <div className={'modal'}>
                <div className={'modal-content'}>
                    <span className={'close'} onClick={onClick}>&times;</span>
                    <h1>{message}</h1>
                </div>
            </div> : null
        }
    </div>
}

export default ModalWindowComponent