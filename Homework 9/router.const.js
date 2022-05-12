const express = require("express");
const router = require("express").Router();
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const blogsRouter = require("./routes/blog.routes");

router.use(express.static(path.join(__dirname, "public")));

// Authentication routes
router.use("/auth", authRoutes);

// Blogs routes
router.use("/blogs", blogsRouter);

module.exports = router;
