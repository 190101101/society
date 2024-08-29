const { User: database, Icon } = require('../core/database');

const Users = (req, res) => {
  return database;
};

module.exports = { Users };
