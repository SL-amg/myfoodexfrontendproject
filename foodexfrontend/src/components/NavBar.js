import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import image from '../images/tbkbank.png'
import "../components/CSS files/NavBar.css"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="siteName">
        <img src={image} className="site-logo" alt="Ma8adeed Logo" />
        <h1>Ma8aDeer</h1>
      </div>
      <nav>
        <NavLink to="/">
          <button className="button"> Home</button>
        </NavLink>
        <NavLink to="/Register">
          <button className="button"> Register</button>
        </NavLink>
        <NavLink to="/Login">
          <button className="button"> Log-In</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
