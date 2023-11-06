const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

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

io.on('connection', (socket) => {
    console.log(`Client with id ${socket.id} connected`);

    socket.emit('message', "Hello Message from server")

    socket.on('message', (message) => {
        console.log(`Message "${message}" received`);
        socket.emit('message', "Message from server")
    });

    socket.on('disconnect', () => {
        console.log(`Client with id ${socket.id} disconnected`);
    });
});

app.get('/ws/requestMessage', (req, res) => {
    io.emit(
        'message',"Requested message from server"
    );
    res.json({message: "Message has been sent via websocket"})
});

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

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
