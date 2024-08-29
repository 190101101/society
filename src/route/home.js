const route = require('express').Router();
const { home: controller } = require('../core/controller');
const { home: middleware } = require('../core/middleware');

route.get('/', middleware.isAuth, controller.homePage);

module.exports = route;
