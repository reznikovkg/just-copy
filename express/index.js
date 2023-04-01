const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = {
  default: [
    {
      id: '123',
      name: 'Utug',
      type: 'switch',
      value: 123,
    },
    {
      id: '1233',
      name: 'Utug1',
      type: 'checkbox',
      value: 123,
    },
    {
      id: '123',
      name: 'Utug',
      type: 'switch',
      value: 123,
    },
    {
      id: '1233',
      name: 'Utug1',
      type: 'checkbox',
      value: 123,
    },
  ],
  tabs: [
    {
        tabs: [
            { title: 'Tab 1', content: 'Tab 1 content' },
            { title: 'Tab 2', content: 'Tab 2 content' },
            { title: 'Tab 3', content: '<h1>A photo of a cute cat<h1><img src="https://image.winudf.com/v2/image/Y29tLmh3d3cyMDE0LkNhdF9zY3JlZW5zaG90c18xX2RlODExYmRi/screen-1.jpg?fakeurl=1&type=.jpg" alt="photo of a cute cat" style="width: 100%"></img>' },
        ],
        activeTab: 1,
    },
    {
        tabs: [
            { title: 'Another Tab 1', content: 'Another Tab 1 content' },
            { title: 'Another Tab 2', content: 'Another Tab 2 content' },
            { title: 'Another Tab 3', content: 'Another Tab 3 content' },
        ],
        activeTab: 0,
    }
  ]
}

app.get('/', (req, res) => {
  res.send('My backend!!!')
})

app.get('/json', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.cat) {
        return res.json(db.default.filter(item => (item.cat === req.query.cat)))
    }
  
    res.json(db.default)
  }, 3000)
})

app.get('/json/:page', (req, res) => {
  setTimeout(() => {
    res.json(db[req.params.page])
  }, 1000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
