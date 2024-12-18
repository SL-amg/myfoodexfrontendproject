import React from "react";
import "../components/CSS files/UserNavBar.css";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteToken } from "../api/storage";


const Omar = 
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_5_bdb6d0aeb8.jpg&w=1920&q=75";

const UserNavBar = () => {

  const navigate = useNavigate();
  
  const logout = () => {
    deleteToken();
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <>
      <div className="mainSideBar">
        <div className="imageAndNameDic">
          <img className="sideBarImage" src={Omar} alt="My Image" />
          <p className="sideBarName">Name of user</p>
        </div>

        <div className="mainSelectorDiv">
          <div className="eachIetmDiv">
            <BiSolidFoodMenu className="sideBarIcons" />
            Catogires
          </div>
          <div className="eachIetmDiv">
            <GiKnifeFork className="sideBarIcons" />
            Recipies
          </div>
          <div className="eachIetmDiv">
            <TbMeat className="sideBarIcons" />
            Ingredents
          </div>
        </div>
        <div className="mainAccountSideBar">
          <div className="eachIetmDiv">
            <MdOutlineSettings className="sideBarIcons" />
            Account
          </div>
          <div className="eachIetmDiv">
            <IoLogOut className="sideBarIcons" />
            <button className="" onClick={logout}> Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavBar;
