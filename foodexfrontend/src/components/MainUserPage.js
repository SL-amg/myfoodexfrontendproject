import React from "react";
import "../components/CSS files/MainUserPage.css";
import "../components/CSS files/UserNavBar.css";
import UserNavBar from "./UserNavBar";
import CategoryList from "./CategoryList";
import RecipyList from "./RecipyList";
import IngredientList from "./IngredientList";

const MainUserPage = () => {
  return (

    <>
    <div className="fixmaindiv">
      <div>
      <UserNavBar />
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
