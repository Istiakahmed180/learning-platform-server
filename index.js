const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Assignment Project Server Running Test");
});

app.listen(port, () => {
  console.log("Server Is Running port", port);
});
