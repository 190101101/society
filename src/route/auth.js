const route = require('express').Router();
const { auth: controller } = require('../core/controller');
const { auth: middleware } = require('../core/middleware');
const { auth: validator } = require('../core/validator');

route.get('/', middleware.isAuth, controller.homePage);
route.get('/login', middleware.isNoAuth, controller.login);
route.post(
  '/login',
  [validator.loginSchema, middleware.isNoAuth],
  controller.loginPost
);

route.get('/register', middleware.isNoAuth, controller.register);
route.post('/register', middleware.isNoAuth, controller.registerPost);

module.exports = route;
