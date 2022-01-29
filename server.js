const express = require("express")
const app = express();
const cors = require('cors');
const server = require("http").createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    }
  });

app.use(cors());
app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.send('Send');
});

app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body;

    if (rooms.has(roomId)) {
        rooms.set(roomId, new Map([
            [users, new Map()],
            [messages, []]
        ]))
    }
    res.send();
});

io.on('connection', socket => {
    console.log('User connected', socket.id);
});

server.listen(9999, (error) => {
    if (error) {
        throw Error(error);
    }

    console.log('Сервер запущен!');
});

