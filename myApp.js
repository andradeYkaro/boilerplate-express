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































 module.exports = app;
