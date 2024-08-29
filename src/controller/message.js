const { Message: model } = require('../core/model');

const messages = async (req, res) => {
  res.json(model.Messages());
};

module.exports = { messages };
