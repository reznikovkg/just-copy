import './style.scss'

const CheckboxSwitch = ({isChecked, onToggleChange}) => {

    return <label className={`checkbox-switch`}>
        <input
            type={'checkbox'}
            checked={isChecked}
            onClick={onToggleChange}
        />
        <span className={`checkbox__label${isChecked ? ' --checked' : ''}`}>Переключатель</span>
    </label>
}

export default CheckboxSwitch