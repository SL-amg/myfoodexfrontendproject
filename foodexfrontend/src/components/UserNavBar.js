import React from "react";
import "../components/CSS files/UserNavBar.css";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteToken } from "../api/storage";
import OneUserCard from "./OneUserCard";


const Omar = 
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_5_bdb6d0aeb8.jpg&w=1920&q=75";

const UserNavBar = ({account, usernamecard, name, image, username,}) => {
console.log(usernamecard)
  const navigate = useNavigate();
  
  const logout = () => {
    deleteToken();
    localStorage.removeItem("token");
    navigate("/login");
  };
// here we call the function account and request what we need

  return (
    <>
      <div className="mainSideBar">
        <div className="imageAndNameDic">
          <img className="sideBarImage" src={account?.image} alt="My Image" />
          <p className="sideBarName">{account?.username}</p>
        </div>

        <div className="mainSelectorDiv">
          <div className="eachIetmDiv">
            <BiSolidFoodMenu className="sideBarIcons" />
            <NavLink className="userLinkNavBarText" to="/categoriesList">Catgoires</NavLink>
          </div>
          <div className="eachIetmDiv">
            <GiKnifeFork className="sideBarIcons" />
            <NavLink className="userLinkNavBarText" to="/recipyList">Recipies</NavLink>
          </div>
          <div className="eachIetmDiv">
            <TbMeat className="sideBarIcons" />
            <NavLink className="userLinkNavBarText" to="/ingredientList">Ingredents</NavLink>
          </div>
        </div>
        <div className="mainAccountSideBar">
          <div className="eachIetmDiv">
            <MdOutlineSettings className="sideBarIcons" />
            <NavLink className="userLinkNavBarText" to="/profile">Account</NavLink>
          </div>
          <div className="eachIetmDiv">
            <IoLogOut className="sideBarIcons" />
            <button className="buttonLogout" onClick={logout}> Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavBar;
