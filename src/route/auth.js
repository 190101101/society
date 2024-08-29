const route = require('express').Router();
const { auth: controller } = require('../core/controller');
const { auth: middleware } = require('../core/middleware');
const { auth: validator } = require('../core/validator');

// route.get('/login', middleware.isNoAuth, controller.login);
route.get('/login', controller.login);

route.post(
  '/login',
  // [validator.authSchema, middleware.isNoAuth],
  controller.loginPost
);
// route.get('/register', middleware.isNoAuth, controller.register);
route.get('/register', controller.register);
// route.post('/register', middleware.isNoAuth, controller.registerPost);
route.post('/register', controller.registerPost);

module.exports = route;
