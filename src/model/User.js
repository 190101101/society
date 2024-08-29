const { User: database } = require('../database');

const Login = (req, res, findUser) => {
  const { password } = req.body;

  if (password != findUser.password) {
    return { status: false, message: 'incorrect password' };
  }

  findUser.updatedAt = new Date();

  // session and cookie
  req.cookies.user = findUser;
  req.session.user = findUser;
  return { status: true, findUser };
};

const Register = (req, res) => {
  const { username, password } = req.body;

  const user = {
    id: Date.now(),
    username,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
    icon: 'monster1.png',
  };

  database.push(user);

  // session and cookie
  req.cookies.user = user;
  req.session.user = user;
  return { status: true, user };
};

module.exports = { Login, Register };
