require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();
app.use(express.json());

// Routes
app.use("/v1/users", userRouter);
app.use("/v1/products", productRouter);

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("CONNECTED TO DATABASE SUCCESS!");
  app.listen(3000);
});
