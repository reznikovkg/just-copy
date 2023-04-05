const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
  {
    id: 0,
    items: [
      {
        header: 'Accordion 1 Item 1',
        content: '<img src="https://media.tenor.com/aMV0odd8Bw8AAAAC/frog-pepsi.gif" alt="frog pepsi"></img>',
        active: true,
      },
      {
        header: 'Accordion 1 Item 2',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        active: true,
      },
      {
        header: 'Accordion 1 Item 3',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        active: false,
      },
    ],
  },
  {
    id: 1,
    items: [
      {
        header: 'Accordion 2 Item 1',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        active: false,
      },
      {
        header: 'Accordion 2 Item 2',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        active: false,
      },
      {
        header: 'Accordion 2 Item 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        active: false,
      },
    ],
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
