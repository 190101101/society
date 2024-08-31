const { User, Message } = require('../core/database');
const socket = require('socket.io');

let online = [];

module.exports = function (server) {
  const io = socket(server, {
    cors: {
      origin: '*',
      method: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    socket.emit('server:connect', socket.id);
    online.push(socket);

    /*
    socket.on('client:online:check', (data) => {
      online.push(data);
      io.emit('server:online:check', online);
    });
    */

    io.emit('server:data', {
      online: online.length,
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
      // online = [...online.filter((user) => user.socket !== socket.id)];
      online = [...online.filter((id) => id !== socket)];

      io.emit('server:data', {
        online: online.length,
        users: User.length,
        messages: Message.length,
      });
    });
  });
};
