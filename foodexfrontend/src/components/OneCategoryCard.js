import React from "react";
import "../components/CSS files/CategoryCard.css";

function OneCategoryCard({ categorycard, name, image, recipes }) {
  return (
    <div className="recipyDiv">
      <div className="recipyAction">
        <div>
          <p className="recipyTextDiv">Catigory Name is </p>
          <h2 className="recipyTextresaltsDiv">{categorycard?.name}</h2>
        </div>

        <div>
          <p className="recipyTextDiv">category Image is </p>
          <img
            className="recipyImage"
            src={
              "" +
              categorycard?.image
            }
          />
        </div>

        <div>
          <p className="recipyTextDiv">Catigory Recipies are</p>
          <div>
            <pre>{JSON.stringify(categorycard?.recipes, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCategoryCard;
