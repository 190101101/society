const sanitizeHtml = require('sanitize-html');

const bodySanitize = (req, res, next) => {
  for (let key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      req.body[key] = sanitizeHtml(req.body[key], {
        allowedTags: [], // We do not allow any HTML tags
        allowedAttributes: {}, // We do not allow any HTML attributes
      }).trim(); // We remove spaces using Trim
    }
  }

  next();
};

module.exports = { bodySanitize };
