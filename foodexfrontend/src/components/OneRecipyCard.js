//this is one recipy card

import React from 'react'
import "../components/CSS files/RecipyCard.css";

function OneRecipyCard({ recipycard, name, image, nutritionFact, creater, category,}) {
  return (
    <div className='catogaryOneItemDiv'>
        <div>
          Recipy Name is
          {recipycard?.name}
        </div>
        <div>
        Recipy Image is
          <img src={"https://react-bank-project.eapi.joincoded.com/" + recipycard?.image}/>
        </div>
        <div>
          Recipy nutritionFact is
          {recipycard?.nutritionFact}
        </div>
        <div>
          Recipy Creater is
          {recipycard?.creator}
        </div>
        <div>
          Recipy category is
          {recipycard?.category}
        </div>
        <div>
        Recipy Ingredients are
        <pre>{JSON.stringify(recipycard?.ingredients, null, 2)}</pre>;
     
        </div>

      </div>
  )
}

export default OneRecipyCard
