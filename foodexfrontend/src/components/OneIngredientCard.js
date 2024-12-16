//this is one ingredient card

import React from 'react'

function OneIngredientCard({ ingredientcard, name, scale, amount, recipes,}) {
  return (
    <div className='catogaryOneItemDiv'>
        <div>
          igredient Name is
          {ingredientcard?.name}
        </div>
        <div>
        igredient Scale is
          {ingredientcard?.scale}
        </div>
        <div>
        igredient amount is
          {ingredientcard?.amount}
        </div>
        <div>
        igredient recipies is
          {ingredientcard?.recipes}
        </div>

      </div>
  )
}

export default OneIngredientCard
