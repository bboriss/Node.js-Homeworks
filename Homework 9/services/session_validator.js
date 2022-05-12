// Checking if Admin is logged in

const validateAdminSession = (req, res, next) => {
  if (req.session.adminLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

// Checking if User is logged in

const validateUserSession = (req, res, next) => {
  if (req.session.userLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

// Checking If User OR Admin are logged In

const validateGetAllItems = (req, res, next) => {
  if (req.session.userLoggedIn || req.session.adminLoggedIn) {
    next();
  } else {
    res.status(400).send({ msg: "Please log in first" });
  }
};

module.exports = {
  validateAdminSession,
  validateUserSession,
  validateGetAllItems,
};
