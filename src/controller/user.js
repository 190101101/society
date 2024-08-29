const { User: model } = require('../core/model');

const users = async (req, res) => {
  res.json(model.Users());
};

module.exports = { users };
