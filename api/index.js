const express = require("express");
const app = express();
require('dotenv').config()
const fetch = require("node-fetch");
const keys = require("./keys");


app.get("/api/search", (req, res) => {
  const searchQuery = req.query;

  let end = "";

  for (const k in searchQuery) {
    end = end + `&${k}=${searchQuery[k]}`;
  }
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keys.spoonacular_API}&number=100${end}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

app.get("/api/recipe/:recipeid", (req, res) => {
  const id = req.params.recipeid;

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${keys.spoonacular_API}&includeNutrition=true`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));

//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "src", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));