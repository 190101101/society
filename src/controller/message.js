const { validationResult } = require('express-validator');
const { Message: model } = require('../core/model');

const messages = async (req, res) => {
  res.json(model.Messages());
};

const sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json(errors).status(200);

  const data = model.sendMessage(req, res);
  return res.json(data).status(200);
};

module.exports = { messages, sendMessage };
