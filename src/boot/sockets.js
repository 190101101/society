const { User, Message } = require('../core/database');

let online = [];

module.exports = function (io) {
  io.on('connection', (socket) => {
    online.push(socket.id);

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
      users: User.reverse(),
      messages: Message,
    });

    socket.on('disconnecting', () => {
      online = [...online.filter((id) => id !== socket.id)];

      io.emit('server:data', {
        online: online.length,
        users: User.length,
        messages: Message.length,
      });
    });
  });
};
