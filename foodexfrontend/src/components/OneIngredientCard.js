//this is one ingredient card

import React from "react";
import "../components/CSS files/IngredientCard.css";

function OneIngredientCard({ ingredientcard, name, scale, amount, recipes }) {
  return (
    <div className="ingredientDiv">
      <div className="ingredientAction">
        <div>
          <p className="integoryTextDiv">igredient Name is </p>
          <h2 className="intgoryTextresaltsDiv">{ingredientcard?.name} </h2>
        </div>

        <div>
          <p className="integoryTextDiv">igredient Scale is </p>
          <h2 className="intgoryTextresaltsDiv">{ingredientcard?.scale} </h2>
        </div>

        <div>
          <p className="integoryTextDiv"> igredient amount is </p>
          <h2 className="intgoryTextresaltsDiv">{ingredientcard?.amount} </h2>
        </div>

        <div>
          <p className="integoryTextDiv"> igredient recipies is</p>
          <ul>{recipes.map(recipe=>(<li>{recipe.name}</li>))}</ul>
        </div>
      </div>
    </div>
  );
}

export default OneIngredientCard;
