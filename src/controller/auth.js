const { validationResult } = require('express-validator');
const { Auth: model } = require('../core/model');

const login = async (req, res) => {
  res.render('auth/login', {
    layout: 'layout/login',
  });
};

const register = (req, res) => {
  res.render('auth/register', {
    layout: 'layout/login',
  });
};

const loginPost = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json(errors).status(200);

  const data = model.Login(req, res);
  return res.json(data).status(200);
};

const registerPost = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json(errors).status(200);

  const data = model.Register(req, res);
  return res.json(data).status(200);
};

module.exports = { login, register, loginPost, registerPost };
