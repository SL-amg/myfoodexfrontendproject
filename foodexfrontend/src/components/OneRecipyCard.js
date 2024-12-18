//this is one recipy card

import React from "react";
import "../components/CSS files/RecipyCard.css";

function OneRecipyCard({ recipycard, ingredients }) {
  return (
    <div className="recipyDiv">
      <div className="recipyAction">
        <div>
          <p className="recipyTextDiv">Recipy Name is </p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.name}</h2>
        </div>
        <div>
          <p className="recipyTextDiv">Recipy Image is </p>
          <img className="recipyImage" src={"" + recipycard?.image} />
        </div>

        <div>
          <p className="recipyTextDiv">Recipy nutritionFact are </p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.nutritionFact}</h2>
        </div>

        <div>
          <p className="recipyTextDiv">Recipy Creater is </p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.creator?.name}</h2>
        </div>

        <div>
          <p className="recipyTextDiv">Recipy category is</p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.category}</h2>
        </div>
        <div>
          <p className="recipyTextDiv">Recipy Ingredients are</p>
          <div>
            <ul>
              {ingredients?.map((ingredient) => (
                <li>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneRecipyCard;
