const route = require('express').Router();
const { message: controller } = require('../core/controller');
const { sanitize: middleware, auth } = require('../core/middleware');
const { message: validator } = require('../core/validator');

route.get('/messages', auth.isAuth, controller.messages);
route.post(
  '/messages',
  [auth.isAuth, middleware.bodySanitize, validator.messageSchema],
  controller.sendMessage
);

module.exports = route;
