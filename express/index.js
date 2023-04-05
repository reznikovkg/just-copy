const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
  {
    id: 1,
    login: 'User1',
    username: 'Cool Username',
    status: '👨‍💻Coding👨‍💻',
  },
  {
    id: 2,
    login: 'User2',
    username: 'Even Cooler Username',
    status: '☢️Reviewing code☢️',
  },
  {
    id: 3,
    login: 'User3',
    username: 'Boss',
    status: '🏝️Chilling🏝️',
  },
  {
    id: 4,
    login: 'User4',
    username: 'Sysadmin',
    status: '☕Serving coffee☕',
  },
  {
    id: 5,
    login: 'Senior',
    username: 'Senior Developer',
    status: '🤙Hardly working🤙',
  },
  {
    id: 6,
    login: 'Junge',
    username: 'Junior Developer',
    status: '🔥Working Hard🔥',
  },
  {
    id: 7,
    login: 'Probation341',
    username: 'Probation Developer',
    status: '💀Refactoring everything💀',
  },
]

app.get('/', (req, res) => {
  res.send('My backend!!!')
})

app.get('/json', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.cat) {
        return res.json(db.filter(item => (item.cat === req.query.cat)))
    }
    res.json(db)
  }, 1000)
})

app.get('/json/:id', (req, res) => {
  return res.json(db.find(item => (item.id === req.params.id)))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
