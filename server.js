const app = require("express")();
const cors = require('cors');
const server = require("http").createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    }
  });

app.use(cors());

const rooms = new Map();

app.get('/users', (req, res) => {
    res.send('Send');
});

io.on('connection', socket => {
    console.log('User connected', socket);
});

server.listen(9999, (error) => {
    if (error) {
        throw Error(error);
    }

    console.log('Сервер запущен!');
});

