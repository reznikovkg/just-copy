const { getAllSwitches, changeSwitch, addSwitch, removeSwitch } = require("../switches")
const { v4: uuidv4 } = require('uuid');

class SwitchesController {
    getAllSwitches(req, res) {
        try {
            const allSwitches = getAllSwitches();
            return res.json(allSwitches)
        } catch (e) {
            return res.status(500).json({ message: "Error occurred while getting switches" });
        }
    }

    addSwitch(req, res) {
        try {
            const { _switch } = req.body
            if (!_switch) {
                return res.status(400).json({ message: "Bad request" });
            }

            const switchesData = addSwitch({ id: uuidv4(), ..._switch});
            return res.json(switchesData)
        } catch (e) {
            return res.status(500).json({ message: "Error occurred while getting switch" });
        }
    }

    removeSwitch(req, res) {
        try {
            const { id } = req.query

            if (!id) {
                return res.status(400).json({ message: "Bad request" });
            }

            const switchesData = removeSwitch(id);

            return res.json(switchesData)
        } catch (e) {
            return res.status(500).json({ message: "Error occurred while deleting a switch" });
        }
    }

    changeSwitch(req, res) {
        try {
            const {id} = req.body

            if (!id) {
                return res.status(400).json({ message: "Bad request" });
            }

            const switchesData = changeSwitch(id);

            return res.json(switchesData)
        } catch (e) {
            return res.status(500).json({ message: "Error occurred while changing a switch" });
        }
    }
}
module.exports = new SwitchesController();