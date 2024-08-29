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
  return { status: true, messageObject };
};

module.exports = { Messages, sendMessage };
