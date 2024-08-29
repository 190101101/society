const { Message: database } = require('../core/database');

const Messages = (req, res) => {
  return database;
};

module.exports = { Messages };
