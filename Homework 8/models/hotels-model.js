const path = require("path");

const { readFile, writeFile } = require("../utils/file-service");

const HOTELS_PATH = path.join(__dirname, "..", "db", "hotels.json");

class HotelsModel {
  getHotels() {
    const hotels = readFile(HOTELS_PATH);
    return hotels;
  }

  addHotel(newHotelData) {
    const existingHotels = readFile(HOTELS_PATH);

    const newHotelsData = [...existingHotels, newHotelData];
    writeFile(HOTELS_PATH, newHotelsData);
  }
}

module.exports = HotelsModel;
