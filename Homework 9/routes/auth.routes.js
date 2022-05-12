const router = require("express").Router();
const session = require("../sessions/sessions.const");
const path = require("path");
const { readDataFromDb } = require("../services/data.service");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Users database path
const usersPath = path.join(__dirname, "..", "database", "users.json");

router.get("/login", (req, res) => {
  res.render("login");
  console.log(req.session);
});

router.post("/login", upload.none(), (req, res) => {
  credentials = JSON.parse(JSON.stringify(req.body));
  // Reading DB
  const users = JSON.parse(readDataFromDb(usersPath));
  // Checking if user exists
  const user = users.find(
    (u) =>
      u.username === credentials.username && u.password === credentials.password
  );
  //  if does not
  if (typeof user === "undefined") {
    res.status(403).send({ message: "Bad credentials" });
  }
  //  checking role input and user
  else if (credentials.role === "Admin" && user.isAdmin) {
    req.session.adminLoggedIn = true;
    res.status(200).redirect("/blogs");
    console.log(req.session);
  } else if (credentials.role === "User" && !user.isAdmin) {
    req.session.userLoggedIn = true;
    res.status(200).redirect("/blogs");
    console.log(req.session);
  } else {
    res.status(403).send({ message: "Bad credentials" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.send({ message: "Logout successful" });
});

module.exports = router;
