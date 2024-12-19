import React from "react";
import image from "../images/logo.jpeg";
import "../components/CSS files/UserNavBar.css"
import { deleteToken } from "../api/storage";
import { NavLink, useNavigate } from "react-router-dom";

const UserNavBar2 = () => {
  const navigate = useNavigate();
  const logout = () => {
    deleteToken();
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="navBar">
      <div className="siteName">
        <img src={image} className="site-logo" alt="Ma8adeed Logo" />
        <h1>Ma8aDeer</h1>
      </div>
      <nav>
        <NavLink to="/main">
          <button className="buttonNavBar2"> Main</button>
        </NavLink>
        <NavLink to="/categoriesList">
          <button className="buttonNavBar2"> Catgoires</button>
        </NavLink>
        <NavLink to="/recipyList">
          <button className="buttonNavBar2"> Recipies</button>
        </NavLink>
        <NavLink to="/ingredientList">
          <button className="buttonNavBar2"> Ingredents</button>
        </NavLink>
        <NavLink to="/profile">
          <button className="buttonNavBar2"> Profile</button>
        </NavLink>
        <button className="buttonNavBar2" onClick={logout}> Logout</button>
      </nav>
    </div>
  );
};

export default UserNavBar2;
