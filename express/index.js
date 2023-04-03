const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
  {
    id:'1',
    title:'First Title',
    content:'First Content'
  },
  {
    id:'2',
    title:'Second Title',
    content:'Second Content'
  },
  {
    id:'3',
    title:'Third Title',
    content:'Third Content'
  },
]

app.get('/', (req, res) => {
  res.send('My backend!!!')
})

app.get('/json', (req, res) => {
    if (req.query && req.query.cat) {
        return res.json(db.filter(item => (item.cat === req.query.cat)))
    } 
    res.json(db)
})

app.get('/json/:id', (req, res) => {
  return res.json(db.find(item => (item.id === req.params.id)))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
