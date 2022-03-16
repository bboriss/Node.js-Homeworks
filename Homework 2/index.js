// importing modules
const fs = require("fs");
const path = require("path");

// path to the text file
const newPath = path.join(__dirname, "homework.txt");

// text to be added to the file
const newTxt = "Homework 02 in Basic Node";

// adding new text to the file
fs.writeFileSync(newPath, newTxt);

// appending additional text
fs.appendFileSync(newPath, "FINISHED");

// reading and printing in the console
const newFile = fs.readFileSync(newPath, { encoding: "utf-8" });
console.log(newFile);
