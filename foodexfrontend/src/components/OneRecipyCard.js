//this is one recipy card

import React from 'react'

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
          {recipycard?.creater}
        </div>
        <div>
          Recipy category is
          {recipycard?.category}
        </div>

      </div>
  )
}

export default OneRecipyCard
