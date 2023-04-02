const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
  {
    id: '1',
    name: 'Utug',
    type: 'switch',
    value: 123,
  },
  {
    id: '2',
    name: 'Utug1',
    type: 'checkbox',
    value: 123,
  },
  {
    id: '3',
    name: 'Utug',
    type: 'switch',
    value: 123,
  },
  {
    id: '4',
    name: 'Utug1',
    type: 'checkbox',
    value: 123,
  },
]
const db_backup = [...db];

app.get('/', (req, res) => {
  res.send('My backend!!!')
})

app.get('/json', (req, res) => {
  setTimeout(() => {
    if(db.length === 0) {
      db_backup.forEach((el, i) => db[i] = el);
    }

    if (req.query && req.query.cat) {
        return res.json(db.filter(item => (item.cat === req.query.cat)))
    }

    res.json(db)
  }, 3000)
})

app.get('/json/:id', (req, res) => {
  setTimeout(() => {
    res.json(db.find(item => (item.id === req.params.id)) ?? {})
  }, 1000)
})

app.delete('/json/:id', (req, res) => {
  setTimeout(() => {
    const index = db.findIndex(item => (item.id === req.params.id))

    if (db[index]) {
      db.splice(index, 1);
      res.json({success: true})
    } else {
      res.json({success: false})
    }
  }, 1000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
