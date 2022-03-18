const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`<h1>This is the default page text</h1>`);
    return res.end();
  }
  if (url === "/student") {
    res.setHeader("Content-type", "text/html");
    res.write(
      `<ul>
      <li>Student name: Boris</li>
      <li>Student lastname: Stevanovic</li>
      <li>Academy: SEDC</li>
      <li>Subject: Node.js</li></ul>`
    );
    return res.end();
  }
});

server.listen(3000);
