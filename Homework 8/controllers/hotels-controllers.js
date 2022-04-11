const HotelsModel = require("../models/hotels-model");
const hotelsModel = new HotelsModel();

class HotelsController {
  getHotels() {
    const hotels = hotelsModel.getHotels();
    return hotels;
  }
  addHotel(newHotel) {
    hotelsModel.addHotel(newHotel);
  }
}

module.exports = HotelsController;
