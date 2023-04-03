const Router = require("express").Router
const SwitchesController = require("../controllers/switchesController");

const router = new Router();

router.get("/switches", SwitchesController.getAllSwitches)
router.post("/changeSwitch", SwitchesController.changeSwitch)
router.post("/addSwitch", SwitchesController.addSwitch)
router.delete("/removeSwitch", SwitchesController.removeSwitch)

module.exports = router