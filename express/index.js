const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());
const http = require('http');
const WebSocket = require("ws");
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

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

webSocketServer.on('connection', ws => {
    console.log(`Client connected`);

    ws.send('Hi there, I am a WebSocket server');

    ws.on('message', (message) => {
        console.log(`Message "${message}" received`);
        ws.send("Message from server")
    });

    ws.on('disconnect', () => {
        console.log(`Client disconnected`);
    });
});

app.get('/ws/requestMessage', (req, res) => {
    webSocketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send("Requested message from server");
        }
    });
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
