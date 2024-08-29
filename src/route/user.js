const route = require('express').Router();
const { user: controller } = require('../core/controller');
const { user: middleware } = require('../core/middleware');
const { user: validator } = require('../core/validator');

route.get('/', middleware.isAuth, controller.homePage);
route.get('/login', middleware.isNoAuth, controller.login);
route.post(
  '/login',
  [validator.loginSchema, middleware.isNoAuth],
  controller.loginPost
);

module.exports = route;
