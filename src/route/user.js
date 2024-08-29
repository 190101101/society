const route = require('express').Router();
const { user: controller } = require('../controller');
const { user: middleware } = require('../middleware');
const { user: validator } = require('../validator');

route.get('/', middleware.isAuth, controller.homePage);
route.get('/login', middleware.isNoAuth, controller.login);
route.post(
  '/login',
  [validator.loginSchema, middleware.isNoAuth],
  controller.loginPost
);

module.exports = route;
