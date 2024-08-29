const route = require('express').Router();
const { user: controller } = require('../core/controller');

route.get('/users', controller.users);

module.exports = route;
