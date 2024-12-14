import React from 'react'
import "../components/CSS files/UserNavBar.css";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";



const Moudhi =
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_13_6e214d489a.jpg&w=1920&q=75";
  const Omar =
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_5_bdb6d0aeb8.jpg&w=1920&q=75";
const Abdullah =
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_4_a0dd99bc67.jpg&w=1920&q=75";


  const UserNavBar = () => {
  return (
   <>
 <div className='mainSideBar'>

  
<div className='imageAndNameDic'>
<img className="sideBarImage" src={Omar} alt="My Image" />
<p className='sideBarName'>Name of user</p>
</div>

<div className='mainSelectorDiv'>
  <div className='eachIetmDiv'>
  <BiSolidFoodMenu className='sideBarIcons' />
  Catogires
  </div>
  <div className='eachIetmDiv'>
  <GiKnifeFork className='sideBarIcons'  />
  Recipies
  </div>
  <div className='eachIetmDiv'>
  <TbMeat className='sideBarIcons'  />
  Ingredents
  </div>
</div>
<div className='mainAccountSideBar'>
<div className='eachIetmDiv'>
  <MdOutlineSettings className='sideBarIcons'  />
  Account
  </div>
  <div className='eachIetmDiv'>
  <IoLogOut className='sideBarIcons'  />
  Logout
  </div>
</div>

 </div>
   
   </>
  )
}

export default UserNavBar
