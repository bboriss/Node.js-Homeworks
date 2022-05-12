const router = require("express").Router();
const {
  // validateUserSession,
  validateAdminSession,
  validateGetAllItems,
} = require("../services/session_validator");

const {
  getAllBlogs,
  addNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs.controllers");

router.route("/").get(validateGetAllItems, getAllBlogs);
router.route("/add").post(addNewBlog);
router
  .route("/:topic", validateAdminSession)
  .patch(updateBlog)
  .delete(deleteBlog);

module.exports = router;
