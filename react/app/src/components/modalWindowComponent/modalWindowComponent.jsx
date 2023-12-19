import './modalWindowStyle.scss'
const ModalWindowComponent = ({showModal, onClick, message}) => {
    return <div>
        {showModal ?
            <div className={'modal'}>
                <div className={'modal_content'}>
                    <h1>{message}</h1>
                    <span className={'modal_btn_close'} onClick={onClick}>&times;</span>
                </div>
            </div> : null
        }
    </div>
}

export default ModalWindowComponent