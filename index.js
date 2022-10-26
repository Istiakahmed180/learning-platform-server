const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const categories = require("./data/Categories.json");
const coursesData = require("./data/Courses-fake-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment Project Server Running Test");
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.get("/course-details/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = coursesData.find((course) => course._id === id);
  res.send(selectedCourses);
});

app.get("/courses", (req, res) => {
  res.send(coursesData);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategory = coursesData.filter(
    (category) => category.category_id === id
  );
  res.send(selectedCategory);
});

app.listen(port, () => {
  console.log("Server Is Running port", port);
});
