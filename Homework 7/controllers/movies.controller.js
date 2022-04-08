const MoviesModel = require("../models/movies.model");

const moviesModel = new MoviesModel();

const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesModel.getAllMovies();
    console.log(movies);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addNewMovie = async (req, res) => {
  try {
    const movie = await moviesModel.addMovie(req.body);

    res.status(201).json({ movie });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const welcomeMessage = async (req, res) => {
  try {
    const message = await moviesModel.welcomeMessage();
    console.log(message);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllMovies,
  addNewMovie,
  welcomeMessage,
};
