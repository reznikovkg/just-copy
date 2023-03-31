const { getUser, getAllUsers, addUser, removeUser } = require("../users")
const { v4: uuidv4 } = require('uuid');

class UsersController {
    getAllUsers(req, res) {
        try {
            const allUsers = getAllUsers();
            return res.json(allUsers)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка получения пользователей" });
        }
    }

    getUser(req, res) {
        try {
            const { id } = req.query
            if (!id) {
                return res.status(400).json({ message: "Bad request" });
            }

            const user = getUser(id)
            return res.json(user)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка получения пользователя" });
        }
    }

    addUser(req, res) {
        try {
            const { user } = req.body
            if (!user) {
                return res.status(400).json({ message: "Bad request" });
            }

            const usersData = addUser({ id: uuidv4(), ...user});
            return res.json(usersData)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка добавления пользователя" });
        }
    }

    removeUser(req, res) {
        try {
            const { id } = req.query

            if (!id) {
                return res.status(400).json({ message: "Bad request" });
            }

            const usersData = removeUser(id);

            console.log(usersData)

            return res.json(usersData)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка удаления пользователя" });
        }
    }
}
module.exports = new UsersController();