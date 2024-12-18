// to get  the recipies form the Server created by User

import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getAllRecipies } from "../api/users";
import OneRecipyCard from "./OneRecipyCard";
import "../components/CSS files/RecipyCard.css";

const UserRecipyList = () => {
  const queryClient = useQueryClient();
  const [queryName, setQueryName] = useState("");
  const [queryCreator, setQueryCreator] = useState("");
  const [queryCategory, setQueryCategory] = useState("");

  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipies,
  });
  
  const userRecipyCardView = data?.filter((recipycard) => recipycard?.name.includes(queryName))
// .filter((recipycard) => recipycard?.category?.includes(queryCategory))
.filter((recipycard) => recipycard?.creator?.name?.includes(queryCreator))
    .map((recipycard) => (
      <OneRecipyCard
        recipycard={recipycard}
        key={recipycard?.id}
        name={recipycard?.name}
        category={recipycard?.category}
        image={recipycard?.image}
        creator={recipycard?.creator}
        nutritionFact={recipycard?.nutritionFact}
      />
    ));

  return (
    <div className="transactionMainBackground">
      <div>
        <div className="serachDiv">
          <input
            type="Search"
            className="line"
            placeholder="Search By Name of Recipy"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => setQueryName(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
          />
        </div>
        <div className="serachDiv">
          <input
            type="Search"
            className="line"
            placeholder="Search By Creator"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => setQueryCreator(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
          />
        </div>
        <div className="serachDiv">
          <input
            type="Search"
            className="line"
            placeholder="Search By Catigory"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => setQueryCategory(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
          />
        </div>
      </div>

      <div className="resultView">{userRecipyCardView}</div>
    </div>
  );
};

export default UserRecipyList;
