const route = require('express').Router();
const { auth: controller } = require('../core/controller');
const { auth: middleware, sanitize } = require('../core/middleware');
const { auth: validator } = require('../core/validator');

route.get('/login', middleware.isNoAuth, controller.login);

route.post(
  '/login',
  [sanitize.bodySanitize, validator.authSchema, middleware.isNoAuth],
  controller.loginPost
);

route.get('/register', middleware.isNoAuth, controller.register);

route.post(
  '/register',
  [sanitize.bodySanitize, middleware.isNoAuth],
  controller.registerPost
);

module.exports = route;

// route.get('/login', controller.login);
// route.get('/register', controller.register);
// route.post('/register', middleware.isNoAuth, controller.registerPost);
