import React from "react";
import "../components/CSS files/CategoryCard.css";

function OneCategoryCard({ categorycard, name, image, recipes }) {
  return (
    <div className="catigoryDiv">
      <div className="catigoryAction">
        <div>
          {/* <p className="catigoryTextDiv">Catigory Name is </p> */}
          <h2 className="catigoryTextresaltsDiv">{categorycard?.name}</h2>
        </div>

        <div>
          {/* <p className="catigoryTextDiv">category Image is </p> */}
          <img
            className="catigoryImage"
            src={
              "" +
              categorycard?.image
            }
          />
        </div>

        <div>
          <p className="catigoryTextDiv">Recipies:</p>
          <div>
            <ul>{recipes.map(recipe=>(<li>{recipe.name}</li>))}</ul>
          </div>
        </div>
      </div>

      </div>
  );
}

export default OneCategoryCard;
