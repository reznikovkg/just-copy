const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const db = [
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
    }, 3000)
})

app.get('/json/:id', (req, res) => {
    return res.json(db.find(item => (item.id === req.params.id)))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
