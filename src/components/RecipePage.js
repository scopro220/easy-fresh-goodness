import React, { useEffect, useState } from "react";
import { Badge } from "reactstrap";

const RecipePage = () => {
  const [recipeData, setRecipeData] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [instructionsData, setInstructionsData] = useState([]);

  useEffect(() => {
    fetch(`/api/recipe/${window.location.pathname.split("/")[2]}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data);
        setNutritionData(data.nutrition.nutrients);
        setIngredientsData(data.extendedIngredients);
        setInstructionsData(data.analyzedInstructions[0].steps);
      });
  }, []);

  return (
    <div className="recipe-page">
      <div className="wrapper">
        <h1 className="recipe-title">{recipeData.title}</h1>
        <img src={recipeData.image} alt="" />
        <div className="badge-wrapper">
          {recipeData.vegan ? (
            <Badge color="primary" pill>
              Vegan
            </Badge>
          ) : (
            ""
          )}
          {recipeData.vegetarian ? (
            <Badge color="success" pill>
              Vegetarian
            </Badge>
          ) : (
            ""
          )}
          {recipeData.glutenFree ? (
            <Badge color="danger" pill>
              Gluten-Free
            </Badge>
          ) : (
            ""
          )}
          {recipeData.dairyFree ? (
            <Badge color="warning" pill>
              Dairy-Free
            </Badge>
          ) : (
            ""
          )}
          {recipeData.veryHealthy ? (
            <Badge color="info" pill>
              Healthy
            </Badge>
          ) : (
            ""
          )}
        </div>
        <div className="recipe-info">
          <h3 className="ready-in">Ready in {recipeData.readyInMinutes} min</h3>
          <h3 className="seving-size">{recipeData.servings} Servings</h3>
        </div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {ingredientsData.map((item, index) => {
              return (
                <li key={index}>
                  {item.amount.toFixed(2)} {item.unit} {item.originalName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recipe-instructions">
          <h2>Instructions</h2>
          <ol>
            {instructionsData.map((item, index) => {
              return <li key={index}>{item.step}</li>;
            })}
          </ol>
        </div>
        <div className="recipe-nutrition">
          <h2>Nutrition</h2>
          <ul>
            {nutritionData.map((item, index) => {
              return (
                <li key={index}>
                  {item.name}: {item.amount.toFixed()} {item.unit}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
