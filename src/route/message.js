const route = require('express').Router();
const { message: controller } = require('../core/controller');

route.get('/messages', controller.messages);

module.exports = route;
