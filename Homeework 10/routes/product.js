const router = require("express").Router();
const productController = require("../controlers/product");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProductById);
// router.put("/:id/addProduct", productController.addProductToUser);

module.exports = router;
