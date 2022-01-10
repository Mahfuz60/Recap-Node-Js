const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
// const myMiddleware = (req, res, next) => {
//   // console.log("Middleware function");
//   req.currentTime = new Date(Date.now());
//   next();
// };

// app.get("/", myMiddleware, (req, res) => {
//   console.log("home route." + req.currentTime);
//   res.send(`<h1>I am Home Route</h1>`);
// });

//static Middleware
app.use(express.static("public"));

app.get("/homepage", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
