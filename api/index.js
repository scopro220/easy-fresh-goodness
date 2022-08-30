const express = require("express");
const app = express();
require('dotenv').config()
const fetch = require("node-fetch");

app.get("/api/search", (req, res) => {
  const searchQuery = req.query;

  let end = "";

  for (const k in searchQuery) {
    end = end + `&${k}=${searchQuery[k]}`;
  }
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&number=100${end}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

app.get("/api/recipe/:recipeid", (req, res) => {
  const id = req.params.recipeid;

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}&includeNutrition=true`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app