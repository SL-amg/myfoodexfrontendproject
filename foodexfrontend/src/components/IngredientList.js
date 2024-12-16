// to get all the recipies form the Server Side

import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { getAllIngredients } from '../api/users';
import OneIngredientCard from './OneIngredientCard'

const IngredientList = () => {
    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ["ingredientList"],
        queryFn: getAllIngredients,
      });
    
      const ingredientCardView = data?.map((ingredientcard) =>
        <OneIngredientCard ingredientcard={ingredientcard} key={ingredientcard?.id} name={ingredientcard?.name} recipes={ingredientcard?.recipes} amount={ingredientcard?.amount} scale={ingredientcard?.scale} />)
    
  return (
    <div>
         {ingredientCardView}
         hellooooo
         why not changinnnnnnnnnng
    </div>
  )
}

export default IngredientList
