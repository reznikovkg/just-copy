let users = [
    {
        id: "1",
        name: "Nikita",
        age: 21,
        task: "beautiful modal"
    },
    {
        id: "2",
        name: "Sasha",
        age: 21,
        task: "handsome modal"
    },
    {
        id: "3",
        name: "Ilya",
        age: 20,
        task: "huge modal"
    },
    {
        id: "4",
        name: "Pasha",
        age: 23,
        task: "obvious modal"
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