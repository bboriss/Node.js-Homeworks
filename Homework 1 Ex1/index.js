const printBookInfo = require("./book");

const someBook = {
  bookName: "Harry Potter",
  bookPrice: "60$",
  bookAuthor: "J. K. Rowling",
  bookReleaseDate: "26 June 1997",
  bookPages: 700,
};

console.log(printBookInfo(someBook));
