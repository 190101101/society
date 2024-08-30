const client = require('../boot/client');
const { User: database, Icon } = require('../core/database');

const Login = (req, res) => {
  const { username, password } = req.body;

  const user = database.find((data) => {
    return data.username === username;
  });

  if (!user) {
    return { status: false, message: 'user not found' };
  }

  if (password != user.password) {
    return { status: false, message: 'incorrect password' };
  }

  user.updatedAt = new Date().toLocaleString();

  // session and cookie
  req.cookies.user = user;
  req.session.user = user;
  return { status: true, user };
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
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    icon: Icon[Math.floor(Math.random() * 98)],
  };

  database.push(user);
  client.emit('client:newuser', user);

  // session and cookie
  req.cookies.user = user;
  req.session.user = user;
  return { status: true, user };
};

module.exports = { Login, Register };
