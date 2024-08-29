const { User: database, Icon } = require('../core/database');

const Login = (req, res) => {
  const { username, password } = req.body;

  const findedUser = database.find((data) => {
    return data.username === username;
  });

  if (!findedUser) {
    return { status: false, message: 'user not found' };
  }

  if (password != findedUser.password) {
    return { status: false, message: 'incorrect password' };
  }

  findedUser.updatedAt = new Date();

  // session and cookie
  req.cookies.user = findedUser;
  req.session.user = findedUser;
  return { status: true, findedUser };
};

const Register = (req, res) => {
  const { username, password } = req.body;

  const findedUser = database.find((data) => {
    return data.username === username;
  });

  if (findedUser) {
    return { status: false, message: 'user is already have' };
  }

  const user = {
    id: Date.now(),
    username,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
    icon: Icon[Math.floor(Math.random() * 98)],
  };

  database.push(user);

  // session and cookie
  req.cookies.user = user;
  req.session.user = user;
  return { status: true, user };
};

module.exports = { Login, Register };
