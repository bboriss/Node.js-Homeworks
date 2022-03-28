const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const appPath = path.join(__dirname, "students.txt");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Some random page text</h1>`);
});

app.post("/all_students", (req, res) => {
  console.log(req.body);
  fs.writeFileSync(appPath, req.body.studentName, {
    encoding: "utf-8",
  });
  res.redirect("/");
});

app.get("/all_students", (req, res) => {
  res.send(`<h1>Some random page text</h1>`);
});

app.get("/add_student", (req, res) => {
  res.send(`
    <form action="/all_students" method="post">
        <input type="text" name="studentName" placeholder ="Type your name here" />
        <button>Add student</button>
    </form>
    `);
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is running at port: ${PORT}`);
});
