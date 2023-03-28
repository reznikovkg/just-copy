const { getUser, getAllUsers, addUser, removeUser } = require("../users")

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
            const user = getUser(id)
            return res.json(user)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка получения пользователя" });
        }
    }

    addUser(req, res) {
        try {
            const { user } = req.body
            const usersData = addUser(user);
            return res.json(usersData)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка добавления пользователя" });
        }
    }

    removeUser(req, res) {
        try {
            const { id } = req.body
            const usersData = removeUser(id);
            return res.json(usersData)
        } catch (e) {
            return res.status(500).json({ message: "Ошибка удаления пользователя" });
        }
    }
}
module.exports = new UsersController();