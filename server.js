const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.10.10.1";

//create server
const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileName) => {
    fs.readFile(fileName, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "./views/home.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./views/contact.html");
  } else {
    handleReadFile(404, "./views/notFound.html");
  }
});

server.listen(port, hostName, () => {
  console.log(`server is running successfully at http://${hostName}:${port}`);
});
