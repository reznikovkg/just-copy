const {switchesTypes} = require("./constants");

let switches = [
    {
        id: "1",
        name: "switch1",
        type: switchesTypes.SWITCH,
        value: false,
        disabled: false
    },
    {
        id: "2",
        name: "checkbox1",
        type: switchesTypes.CHECKBOX,
        value: false,
        disabled: false
    },
    {
        id: "3",
        name: "switch2",
        type: switchesTypes.SWITCH,
        value: true,
        disabled: true
    },
    {
        id: "4",
        name: "checkbox2",
        type: switchesTypes.CHECKBOX,
        value: false,
        disabled: false
    },
]

const getAllSwitches = () => switches;

const removeSwitch = (id) => {
    switches = switches.filter(sw => sw.id !== id);
    return switches
}

const addSwitch = (user) => {
    switches = [...switches, user]
    return switches;
}

const changeSwitch = (id) => {
    switches = switches.map((sw) => {
        if (sw.id === id) {
            return {
                ...sw,
                value: !sw.value
            }
        } else {
            return sw
        }
    })

    return switches;
}

module.exports = { getAllSwitches, removeSwitch, addSwitch, changeSwitch }