const express = require("express");
const router = require("./router");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, HOST, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
