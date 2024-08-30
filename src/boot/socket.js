const socket = require('socket.io');

let io;

module.exports = {
  init: (server) => {
    io = socket(server, {
      // path: 'tmp',
      pingTimeout: 30000,
      extraHeaders: { 'socket-server': 'token' },
      cors: {
        origin: '*',
        method: ['GET', 'POST'],
      },
    });
    return io;
  },
  getIo: () => {
    if (!io) {
      throw new Error('socket not initilize');
    }
    return io;
  },
};
