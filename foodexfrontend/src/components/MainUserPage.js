import React from "react";
import "../components/CSS files/MainUserPage.css";
import "../components/CSS files/UserNavBar.css";
import UserNavBar from "./UserNavBar";
import CategoryList from "./CategoryList";

const MainUserPage = () => {
  return (

    <>
    <div>
      <div>
      <UserNavBar />
      </div>
      <div>
      <CategoryList />
      </div>
    </div>
    
    </>
    
  );
};

export default MainUserPage;
