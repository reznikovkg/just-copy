import './style.scss'

const SlideSwitch = ({isChecked, onToggleChange}) => {

    return <label className="slide-switch">
        <input
            type="checkbox"
            checked={isChecked}
            onClick={onToggleChange}
            className={'slide-switch__input'}
        />
        <span className={`slider --round${isChecked ? ' --checked' : ''}`}/>
    </label>
}

export default SlideSwitch