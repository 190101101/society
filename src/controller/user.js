const { User: database } = require('../core/database');
const { User: model } = require('../core/model');
const { validationResult } = require('express-validator');

const homePage = (req, res) => {
  res.render('home/home', {
    layout: 'layout/main',
  });
};

const login = (req, res) => {
  res.render('user/login', {
    layout: 'layout/login',
  });
};

const loginPost = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json(errors).status(200);

  const findUser = database.find((data) => {
    return data.username === req.body.username;
  });

  // register
  if (!findUser) {
    return res.json(model.Register(req, res)).status(200);
  }

  // login
  return res.json(model.Login(req, res, findUser)).status(200);
};

module.exports = { homePage, login, loginPost };
