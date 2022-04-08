const router = require("express").Router();
const {
  welcomeMessage,
  getAllMovies,
  addNewMovie,
} = require("../controllers/movies.controller");

router.route("/").get(welcomeMessage);
router.route("/watch_list").get(getAllMovies);
router.route("/add_to_watch_list").post(addNewMovie);

module.exports = router;
