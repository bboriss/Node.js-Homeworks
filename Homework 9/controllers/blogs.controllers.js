const path = require("path");

const BlogsModel = require("../models/blogs.models");

const blogsModel = new BlogsModel();

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogsModel.getAllBlogs();
    console.log(allBlogs);
    res.render("allBlogs", { blogs: allBlogs }, (err, template) => {
      if (err) {
        throw new Error(err);
      } else {
        res.end(template);
      }
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

const addNewBlog = async (req, res) => {
  try {
    const newBlog = await blogsModel.addBlog(req.body);
    res.status(200).send(newBlog);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogTopic = req.params.topic;
    const newData = req.body;

    const updatedBlog = await blogsModel.updateBlog(blogTopic, newData);

    res.status(200).send(updatedBlog);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogTopic = req.params.topic;

    const deletedBlog = await blogsModel.deleteBlog(blogTopic);

    res.status(200).send(deletedBlog);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

module.exports = {
  getAllBlogs,
  addNewBlog,
  updateBlog,
  deleteBlog,
};
