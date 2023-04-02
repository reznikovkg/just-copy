const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
  {
    id: '1',
    value: 12,
  },
  {
    id: '2',
    value: 45,
  },
  {
    id: '3',
    value: 60,
  },
  {
    id: '4',
    value: 100,
  },
]

app.get('/', (req, res) => {
  res.send('My backend!!!')
})

app.get('/json', (req, res) => {
  setTimeout(() => {
    res.json(db)
  }, 3000)
})

app.get('/json/:id', (req, res) => {
  return res.json(db.find(item => (item.id === req.params.id)))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
