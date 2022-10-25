const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const categories = require("./data/Categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment Project Server Running Test");
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Server Is Running port", port);
});
