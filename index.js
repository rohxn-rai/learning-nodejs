const fs = require("fs");

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("This is the OVERVIEW page!");
  } else if (pathname === "/product") {
    res.end("This is the PRODUCT page!");
  } else if (pathname === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {});
    res.end("API!");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello-World!",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
