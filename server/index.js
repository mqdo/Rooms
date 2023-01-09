const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

io.on('connection', (socket) => {
  socket.on('join-chatAll', (data) => {
    socket.join('chatAll');
    socket.to('chatAll').emit('welcome', data);
  });
  
  socket.on('send-message', (data) => {
    const { room, username, message } = data;
    socket.to(room).emit('message', `${username} send a message: ${message} to ${room}`);
  })
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log('listening on port ' + port));
