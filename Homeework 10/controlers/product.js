const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const id = req.params["id"];
  const product = await Product.findById(id);
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const newProduct = new Product(productData);
    const response = await newProduct.save();
    res.json(response);
  } catch (error) {
    res.statusCode = 400;
    res.json(error.message);
  }
};

exports.deleteProductById = async (req, res) => {
  const id = req.params["id"];
  const response = await Product.findByIdAndRemove(id);
  res.json(response);
};

exports.addProductToProduct = async (req, res) => {
  const id = req.params["id"];
  const product = req.body;
  try {
    const product = await Product.findById(id);
    await product.addProduct(product);
    res.json({ message: "Product added" });
  } catch (error) {}
};
