require('dotenv').config();
const createError = require('http-errors');
const path = require('path');
const express = require('express');
const layouts = require('express-ejs-layouts');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { user } = require('./core/route');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors({ origin: 'http://localhost:5000' }));
// app.use(morgan('dev'));
// app.use(helmet());
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node', express.static(path.join(__dirname, '..', '/node_modules')));
app.use(layouts);

app.use(
  session({
    secret: 'token',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    req.session.user = null;
  }

  if (!req.session.user && req.cookies.user) {
    req.session.user = req.cookies.user;
  }

  next();
});

app.use(user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.redirect('/');
  /*
  res.render('error/error', {
    layout: 'layout/error',
  });
  */
});

module.exports = app;
