
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  next();
});
var string = req.method + " " + req.path + " - " + req.ip;
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});
let express = require('express');
let app = express();
console.log("Hello World");
app.get("/", (req, res) => {
    res.send("Hello Express");
  });
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
  app.use("/public", express.static(__dirname + "/public"));
  app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });
  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
  app.post("/name", function(req, res) {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
  });






























 module.exports = app;
