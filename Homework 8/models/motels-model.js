const path = require("path");

const { readFile, writeFile } = require("../utils/file-service");

const MOTELS_PATH = path.join(__dirname, "..", "db", "motels.json");

class MotelsModel {
  getMotels() {
    const motels = readFile(MOTELS_PATH);
    return motels;
  }
  addMotel(newMotelData) {
    const existingMotels = readFile(MOTELS_PATH);
    console.log("ovde sam");
    const newMotelsData = [...existingMotels, newMotelData];
    writeFile(MOTELS_PATH, newMotelsData);
  }
}

module.exports = MotelsModel;
