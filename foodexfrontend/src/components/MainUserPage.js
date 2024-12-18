import React from "react";
import "../components/CSS files/MainUserPage.css";
import "../components/CSS files/UserNavBar.css";
import UserNavBar from "./UserNavBar";
import CategoryList from "./CategoryList";
import RecipyList from "./RecipyList";
import IngredientList from "./IngredientList";
import { getUserDetails } from "../api/users";
import { useQuery } from "@tanstack/react-query";

const MainUserPage = () => {
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUserDetails,
  });
//learnt from sultan to send picture to usernavbar send all data from get function in users
  return (

    <>
    <div className="fixmaindiv">
      <div className="sticknavbar">
      <UserNavBar className="sticknavbar" account= {data} /> 
      </div>
      <div>
      <CategoryList />
      <RecipyList />
      <IngredientList />
      </div>
    </div>
    
    </>
    
  );
};

export default MainUserPage;
