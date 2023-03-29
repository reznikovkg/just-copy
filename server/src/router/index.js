const Router = require("express").Router
const UsersController = require("../controllers/usersController");

const router = new Router();

router.get("/users", UsersController.getAllUsers)
router.get("/user", UsersController.getUser)
router.post("/addUser", UsersController.addUser)
router.delete("/removeUser", UsersController.removeUser)