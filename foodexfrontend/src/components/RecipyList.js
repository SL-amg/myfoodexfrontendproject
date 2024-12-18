// to get all the recipies form the Server Side

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipies } from "../api/users";
import OneRecipyCard from "./OneRecipyCard";

const RecipyList = () => {
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["recipyList"],
    queryFn: getAllRecipies,
  });

  const recipyCardView = data?.map((recipycard) => (
    <OneRecipyCard
      recipycard={recipycard}
      key={recipycard?.id}
      name={recipycard?.name}
      category={recipycard?.category}
      image={recipycard?.image}
    />
  ));

  return <div>{recipyCardView}</div>;
};

export default RecipyList;
