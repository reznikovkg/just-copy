const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = {
  tabs: [
    [
      {name: 'Профиль', content: 'Информация о профиле!'},
      {name: 'Избранное', content: 'Информация об избранном!'},
      {name: 'Настройки', content: 'Информация о настройках!'}
    ],
    [
      {name: 'Москва', content: 'Москва - столица России!'},
      {name: 'Казань', content: 'Казань - столица Татарстана!'},
      {name: 'Воронеж', content: 'Воронеж - столица Черноземья!'}
    ],
  ],
  activeDescriptions: [
    { content: 'Информация о профиле!'},
    { content: 'Москва - столица России!'}
  ]
}

app.get('/', (req, res) => {
  res.send('My backend!!!')
})

app.get('/json', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.cat) {
      return res.json(db.filter(item => (item.cat === req.query.cat)))
    }
    res.json(db)
  }, 500)
})

app.get('/json/:id', (req, res) => {
  return res.json(db[req.params.id])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
