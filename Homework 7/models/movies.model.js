const path = require("path");

const { readMoviesFromDb, writeMoviesToDb } = require("../movies.service");

// movie database path
const moviesPath = path.join(__dirname, "..", "moviesDB", "movies.json");

// constructor class

class MoviesModel {
  // for reading data
  getAllMovies() {
    return new Promise((resolve, reject) => {
      const moviesData = JSON.parse(readMoviesFromDb(moviesPath));
      resolve(moviesData);
    });
  }
  //   for adding data
  addMovie(newMovieData) {
    return new Promise((resolve, reject) => {
      const existingMovies = JSON.parse(readMoviesFromDb(moviesPath)).movies; //array of old movies
      const newMovieDB = {
        movies: [...existingMovies, newMovieData],
      };
      const newMovieList = writeMoviesToDb(
        moviesPath,
        JSON.stringify(newMovieDB)
      );
      resolve(newMovieList);
    });
  }
  welcomeMessage() {
    return new Promise((resolve, reject) => {
      resolve("Welcome to my movies library");
    });
  }
}

module.exports = MoviesModel;
