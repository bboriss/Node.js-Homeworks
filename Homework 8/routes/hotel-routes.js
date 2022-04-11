const router = require("express").Router();

const HotelsController = require("../controllers/hotels-controllers");
const hotelsController = new HotelsController();

router.get("/", (req, res) => {
  const hotels = hotelsController.getHotels();

  res.send(hotels);
});

router.post("/add_hotel", (req, res) => {
  const newHotel = req.body;
  hotelsController.addHotel(newHotel);
});

module.exports = router;
