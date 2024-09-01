const isAuth = (req, res, next) => {
  // console.log(req.session.user);
  if (!req.session.user) {
    // return res.redirect('/login');
  }
  next();
};

const isNoAuth = (req, res, next) => {
  if (req.session.user) {
    // return res.redirect('/');
  }
  next();
};

module.exports = { isAuth, isNoAuth };
