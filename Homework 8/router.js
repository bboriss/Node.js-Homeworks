const router = require("express").Router();
const hotelsRouter = require("./routes/hotel-routes");
const motelsRouter = require("./routes/motel-routes");

router.use("/hotels", hotelsRouter);
router.use("/motels", motelsRouter);

module.exports = router;
