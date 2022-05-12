const mongoose = require("mongoose");
const { Schema } = mongoose;
// const validator = require("validator");

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A product name must have less or equal then 40 characters",
    ],
    minlength: [
      10,
      "A product name must have more or equal then 10 characters",
    ],
  },
  originCountry: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  dateOfProduction: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  userRating: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  ratingsQuantity: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
    trim: true,
  },
  availableInStore: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
