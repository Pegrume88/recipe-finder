import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>Source: {recipe.source}</p>
      <p>Calories: {Math.round(recipe.calories)}</p>
    </div>
  );
};

export default RecipeCard;
