const MotelsModel = require("../models/motels-model");
const motelsModel = new MotelsModel();

class MotelsController {
  getMotels() {
    const motels = motelsModel.getMotels();
    return motels;
  }
  addMotel(newMotel) {
    motelsModel.addMotel(newMotel);
  }
}

module.exports = MotelsController;
