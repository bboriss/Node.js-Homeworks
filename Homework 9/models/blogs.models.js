const path = require("path");

const { readDataFromDb, writeDataToDb } = require("../services/data.service");

// blogs database path
const blogsPath = path.join(__dirname, "..", "database", "blogs.json");

// constructor class

class BlogsModel {
  getAllBlogs() {
    return new Promise((resolve, reject) => {
      const blogsData = JSON.parse(readDataFromDb(blogsPath));

      resolve(blogsData);
    });
  }

  // for adding new blogs

  addBlog(newBlogData) {
    return new Promise((resolve, reject) => {
      if (newBlogData) {
        const existingBlogs = JSON.parse(readDataFromDb(blogsPath));

        const newBlogsDB = [...existingBlogs, newBlogData];

        writeDataToDb(blogsPath, JSON.stringify(newBlogsDB));

        resolve({
          message: "blog added successfully!",
        });
      } else {
        reject({ message: "Invalid input" });
      }
    });
  }

  // update Blog

  updateBlog(blogTopic, updatesObj) {
    return new Promise((resolve, reject) => {
      // Read data from db
      const blogsData = JSON.parse(readDataFromDb(blogsPath));

      // Searching for the blog if it exists
      const requestedBlog = blogsData.find((blog) => blog.topic == blogTopic);

      // If blog found...
      if (requestedBlog) {
        // Checking which index to be replaced
        const index = blogsData.indexOf(requestedBlog);
        // Changing properties
        (requestedBlog.topic = updatesObj.topic),
          (requestedBlog.content = updatesObj.content),
          (requestedBlog.author = updatesObj.author);
        blogsData[index] = requestedBlog;

        writeDataToDb(blogsPath, JSON.stringify(blogsData));
        resolve({
          message: "blog updated successfully!",
        });
      } else {
        reject({ message: "blog not updated successfully" });
      }
    });
  }

  // delete Blog

  deleteBlog(blogTopic) {
    return new Promise((resolve, reject) => {
      //Read data from db
      let blogsData = JSON.parse(readDataFromDb(blogsPath));

      // Filtering database
      const filteredBlogs = blogsData.filter(
        (blog) => blog.topic !== blogTopic
      );

      if (filteredBlogs.length !== blogsData.length) {
        // Saving updated blogs in db
        writeDataToDb(blogsPath, JSON.stringify(filteredBlogs));

        resolve({
          message: "blog deleted successfully!",
        });
      }
      if (blogsData.length == filteredBlogs.length) {
        reject({ message: "blog not deleted successfully" });
      }
    });
  }
}

module.exports = BlogsModel;
