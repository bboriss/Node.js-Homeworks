const printBookInfo = function (book) {
  return ` You can buy the ${book.bookName} book, with the price of
    ${book.bookPrice}, written by
    ${book.bookAuthor}. It was released on
    ${book.bookReleaseDate} and it has
    ${book.bookPages} pages.`;
};

module.exports = printBookInfo;
