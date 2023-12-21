import './modalWindowStyle.scss'

const ModalWindowComponent = ({onCloseModal, onOpenModal, title, content}) => {
    return (
        <div className={'overlay'}>
            <div className={'modal'}>
                <div className={'modal__header'}>
                    <h1>{title}</h1>
                    <span className={'modal__header__close-button'} onClick={onCloseModal}>&times;</span>
                </div>
                <div className={'modal__content'}>
                    <div>{content}</div>
                    {onOpenModal && <button className={'modal__content__open-button'} onClick={onOpenModal}>Открыть модальное окно</button>}
                </div>
            </div>
        </div>
    )
}

export default ModalWindowComponent