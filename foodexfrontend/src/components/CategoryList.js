// to get all the catogaries form the Server Side

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCatogaries } from "../api/users";
import OneCategoryCard from "./OneCategoryCard";
import "../components/CSS files/CategoryCard.css";
import { NavLink, useNavigate } from "react-router-dom";

const CategoryList = () => {
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getAllCatogaries,
  
  });
console.log(data);
  const categoryCardView = data?.map((categorycard) => (
    <OneCategoryCard
      categorycard={categorycard}
      key={categorycard?.id}
      name={categorycard?.name}
      recipes={categorycard?.recipes}
      image={categorycard?.image}
    />
  ));

  return (
  <>
  <div className="centercreatButton">
  <NavLink to="/createCategory">
          <button className="buttoncreateCategory"> Create Category</button>
        </NavLink>

  </div>

    <div className="mainCategoryDiv">{categoryCardView}</div>;
  </>
  
)
};

export default CategoryList;
