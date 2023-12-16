import './modalWindowStyle.scss'
const ModalWindowComponent = ({showModal, onClick}) => {
    return <div>
        {showModal ?
            <div className={'modal'}>
                <div className={'modal-content'}>
                    <span className={'close'} onClick={onClick}>&times;</span>
                    <h1>Вы открыли модальное окно!</h1>
                </div>
            </div> : null
        }
    </div>
}

export default ModalWindowComponent