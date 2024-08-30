const socket = require('socket.io');

let io;

module.exports = {
  init: (server) => {
    io = socket(server, {
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
