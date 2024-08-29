const { Server } = require('socket.io');
const { User: database, Message } = require('../core/database');

let online = [];

const socket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    online.push(socket.id);

    io.emit('server:data', {
      online: online.length,
      users: database.length,
      messages: Message.length,
    });

    socket.on('client:message', (data) => {
      socket.broadcast.emit('server:message', data);
      io.emit('server:messages', {
        messages: Message.length,
      });
    });

    socket.on('client:newuser', (data) => {
      io.emit('server:newuser', data);
      io.emit('server:users', {
        users: database.length,
      });
    });

    socket.on('disconnecting', () => {
      online = [...online.filter((id) => id !== socket.id)];

      io.emit('server:data', {
        online: online.length,
        users: database.length,
        messages: Message.length,
      });
    });
  });
};

module.exports = socket;
