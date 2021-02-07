const keys = require("../config/keys");
const fetch = require("node-fetch");

module.exports = (app) => {
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
};
