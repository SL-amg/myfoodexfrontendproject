import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getAllIngredients } from "../api/users"
import OneIngredientCard from "./OneIngredientCard";
import "../components/CSS files/IngredientCard.css";
import { NavLink, useNavigate } from "react-router-dom";

const UserIngredientList = () => {
    const queryClient = useQueryClient();
    const [queryName, setQueryName] = useState("");
    const [queryScale, setQueryScale] = useState("");
    const [queryRecipy, setQueryRecipy] = useState("");
  
    const { data, isFetching, isSuccess, refetch } = useQuery({
      queryKey: ["ingredients"],
      queryFn: getAllIngredients,
    });

    const userIngredientCardView = data?.filter((ingredientcard) => ingredientcard?.name.includes(queryName))
    .filter((ingredientcard) => ingredientcard?.scale.includes(queryScale))
    // .filter((ingredientcard) => ingredientcard?.recipes.includes(queryRecipy))
    .map((ingredientcard) => (
        <OneIngredientCard
      ingredientcard={ingredientcard}
      key={ingredientcard?.id}
      name={ingredientcard?.name}
      recipes={ingredientcard?.recipes}
      amount={ingredientcard?.amount}
      scale={ingredientcard?.scale}
    />
));

return (
    <div className="transactionMainBackground">
      <div className="centeringreditenButton">
      <NavLink to="/createIngredient">
          <button className="buttonIngredietnCreate"> Create Ingredient</button>
        </NavLink>

      </div>

    <div className="centeringreditenButton">
      <div className="serachDiv">
        <input
          type="Search"
          className="line"
          placeholder="Search By Name of Ingredient"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(event) => setQueryName(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
        />
      </div>
      <div className="serachDiv">
        <input
          type="Search"
          className="line"
          placeholder="Search By Scale"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(event) => setQueryScale(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
        />
      </div>
      <div className="serachDiv">
        <input
          type="Search"
          className="line"
          placeholder="Search By Recipy"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(event) => setQueryRecipy(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
        />
      </div>
    </div>

    <div className="mainIngridentDiv">{userIngredientCardView}</div>
  </div>

);
};

export default UserIngredientList;
