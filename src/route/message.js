const route = require('express').Router();
const { message: controller } = require('../core/controller');
// const { message: middleware } = require('../core/middleware');
const { message: validator } = require('../core/validator');

route.get('/messages', controller.messages);
route.post('/messages', validator.messageSchema, controller.sendMessage);

module.exports = route;
