const client = require('../boot/client');
const { Message: database } = require('../core/database');

const Messages = (req, res) => {
  return database;
};

const sendMessage = (req, res) => {
  const { username, message, icon, createdAt } = req.body;

  const messageObject = {
    username,
    message,
    icon,
    createdAt,
  };

  database.push(messageObject);
  client.emit('client:message', req.body);

  return { status: true, messageObject };
};

module.exports = { Messages, sendMessage };
