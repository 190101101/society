const { User, Message } = require('../core/database');
const socket = require('socket.io');

let online = [];
let onlinecounter = [];

module.exports = function (server) {
  const io = socket(server, {
    cors: {
      origin: '*',
      method: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    onlinecounter.push(socket.id);

    socket.emit('server:connect', socket.id);

    socket.on('client:online:check', (data) => {
      online.push(data);
      io.emit('server:online:check', online);
    });

    io.emit('server:data', {
      online: onlinecounter.length,
      users: User.length,
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
        users: User.length,
      });
    });

    socket.emit('client:content', {
      users: User,
      messages: Message,
    });

    socket.on('disconnecting', () => {
      onlinecounter = [...onlinecounter.filter((id) => id !== socket.id)];
      online = [...online.filter((user) => user.socket !== socket.id)];

      io.emit('server:data', {
        online: onlinecounter.length,
        users: User.length,
        messages: Message.length,
      });
    });
  });
};
