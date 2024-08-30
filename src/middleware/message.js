const sanitizeHtml = require('sanitize-html');

const messageSanitize = (req, res, next) => {
  req.body.message = sanitizeHtml(req.body.message).trim();
  next();
};

module.exports = { messageSanitize };
