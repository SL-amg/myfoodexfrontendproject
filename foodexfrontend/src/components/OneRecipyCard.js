//this is one recipy card

import React from "react";
import "../components/CSS files/RecipyCard.css";

function OneRecipyCard({
  recipycard,
  name,
  image,
  nutritionFact,
  creater,
  category,
}) {
  return (
    <div className="recipyDiv">
      <div className="recipyAction">
        <div>
          <p className="recipyTextDiv">Recipy Name is </p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.name}</h2>
        </div>
        <div>
          <p className="recipyTextDiv">Recipy Image is </p>
          <img
            className="recipyImage"
            src={
              "" +
              recipycard?.image
            }
          />
        </div>

        <div>
          <p className="recipyTextDiv">Recipy nutritionFact are </p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.nutritionFact}</h2>
        </div>

        <div>
          <p className="recipyTextDiv">Recipy Creater is </p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.creator}</h2>
        </div>

        <div>
          <p className="recipyTextDiv">Recipy category is</p>
          <h2 className="recipyTextresaltsDiv">{recipycard?.category}</h2>
        </div>
        <div>
          <p className="recipyTextDiv">Recipy Ingredients are</p>
          <div>
            <pre>{JSON.stringify(recipycard?.ingredients, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneRecipyCard;
