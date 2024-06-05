function authenticate(req, res, next) {
  if (!req.session.user) {
    return res.render("./unauthenticated.ejs");
  }
  next();
}

module.exports = authenticate;
