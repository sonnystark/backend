const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

/**
 * ROUTING STARTS
 */

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/menu", (req, res) => {
  res.sendFile(__dirname + "/views/menu.html");
});

app.get("/reservation", (req, res) => {
  res.sendFile(__dirname + "/views/reservation.html");
});

app.get("/special-dishes", (req, res) => {
  res.sendFile(__dirname + "/views/special-dishes.html");
});

app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/views/team.html");
});

/**
 * ROUTING ENDS
 */

app.listen(port, () => {
  console.log(`node application is listening to port: ${port}`);
});
