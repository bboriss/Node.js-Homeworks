const router = require("express").Router();
const userController = require("../controlers/user");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.delete("/:id", userController.deleteUserById);

module.exports = router;
