//this is one ingredient card

import React from "react";
import "../components/CSS files/IngredientCard.css";

function OneIngredientCard({ ingredientcard, name, scale, amount, recipes }) {
  return (
    <div className="recipyDiv">
      <div className="recipyAction">
        <div>
          <p className="recipyTextDiv">igredient Name is </p>
          <h2 className="recipyTextresaltsDiv">{ingredientcard?.name} </h2>
        </div>

        <div>
          <p className="recipyTextDiv">igredient Scale is </p>
          <h2 className="recipyTextresaltsDiv">{ingredientcard?.scale} </h2>
        </div>

        <div>
          <p className="recipyTextDiv"> igredient amount is </p>
          <h2 className="recipyTextresaltsDiv">{ingredientcard?.amount} </h2>
        </div>

        <div>
          <p className="recipyTextDiv"> igredient recipies is</p>
          <h2 className="recipyTextresaltsDiv">{ingredientcard?.recipes} </h2>
        </div>
      </div>
    </div>
  );
}

export default OneIngredientCard;
