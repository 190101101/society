const socket = require('../boot/socket');
const { getSocket } = require('../boot/client');

const homePage = async (req, res) => {
  socket.getIo().to(getSocket()).emit('server', `hello ${getSocket()}`);

  res.render('home/home', {
    layout: 'layout/main',
  });
};

module.exports = { homePage };
