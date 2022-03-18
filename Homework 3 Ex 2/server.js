const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Some random page text</h1>`);
    return res.end();
  }

  if (url === "/all_students") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Some random page text</h1>`);

    const chunksReceived = [];
    const productsPath = path.join(__dirname, "students.txt");

    req.on("data", (chunk) => {
      chunksReceived.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(chunksReceived).toString();
      const dataArray = parsedData.split("=");
      const studentNameRecieved = dataArray[1];
      const finalName = studentNameRecieved.replace("+", " ");
      console.log(finalName);

      // Adding to the student.txt
      fs.writeFileSync(productsPath, finalName, {
        encoding: "utf-8",
      });
    });

    return res.end();
  }

  if (url === "/add_student") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <form action="/all_students" method="post">
        <input type="text" name="studentName" placeholder ="Type your name here" />
        <button>Add student</button>
    </form>
    `);
    return res.end();
  }
});

server.listen(3000);
