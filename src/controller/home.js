const homePage = async (req, res) => {
  res.render('home/home', {
    layout: 'layout/main',
  });
};

module.exports = { homePage };
