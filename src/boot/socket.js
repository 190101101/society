const { Server } = require('socket.io');

let users = [];
let online = [];
let chatDatabase = [];

const socket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    online.push(socket.id);

    socket.emit('server:database', chatDatabase);

    io.emit('server:online', online.length);

    socket.on('client:message', (data) => {
      chatDatabase.push(data);
      io.emit('server:message', data);
    });

    socket.on('disconnecting', () => {
      online = [...online.filter((id) => id !== socket.id)];
      io.emit('server:online', online.length);
    });
  });
};

module.exports = socket;
