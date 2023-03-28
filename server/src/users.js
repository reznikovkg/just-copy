let users = [
    {
        id: 1,
        name: "Nikita",
        surname: "Averochkin",
        age: 21,
        task: "modal"
    },
    {
        id: 2,
        name: "Sasha",
        surname: "Legezin",
        age: 21,
        task: "accordeon"
    },
    {
        id: 3,
        name: "Ilya",
        surname: "Kram",
        age: 20,
        task: "something"
    },
    {
        id: 4,
        name: "Pasha",
        surname: "Rub",
        age: 23,
        task: "react"
    }
]

const getUser = (id) => users.find(u => u.id === id);

const getAllUsers = () => users;

const removeUser = (id) => {
    users = users.filter(u => u.id !== id);
    return users
}

const addUser = (user) => {
    users = [...users, user]
    return users;
}

module.exports = { users, getAllUsers, getUser, removeUser, addUser }