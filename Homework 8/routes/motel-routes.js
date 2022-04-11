const router = require("express").Router();

const MotelsController = require("../controllers/motels-controllers");
const motelsController = new MotelsController();

router.get("/", (req, res) => {
  const motels = motelsController.getMotels();

  res.send(motels);
});

router.post("/add_motel", (req, res) => {
  const newMotel = req.body;
  motelsController.addMotel(newMotel);
});

module.exports = router;
