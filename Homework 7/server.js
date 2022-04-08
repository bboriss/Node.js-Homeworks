const express = require("express");
const router = require("./routes/movie.routes");

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/v1/movies", router);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is listening at port : ${PORT}`);
});
