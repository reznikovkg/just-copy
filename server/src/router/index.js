const Router = require("express").Router
const UsersController = require("../controllers/usersController");

const router = new Router();

router.get("/users", UsersController.getAllUsers)
router.get("/user", UsersController.getUser)
router.post("/user", UsersController.addUser)
router.delete("/user", UsersController.removeUser)