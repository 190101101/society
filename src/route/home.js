const route = require('express').Router();
const { home: controller } = require('../core/controller');
const { auth: middleware } = require('../core/middleware');

// route.get('/', middleware.isAuth, controller.homePage);
route.get('/', controller.homePage);

module.exports = route;
