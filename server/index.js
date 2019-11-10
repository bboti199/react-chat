const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('user has connected');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('user has disconnected');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
