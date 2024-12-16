//this is one User card
import React from 'react'
import "../components/CSS files/UserCard.css";


function OneUserCard({ usernamecard, name, image, username, passwrod}) {
    return (
        <>
        <div>
          User Name is
          {usernamecard?.name}
        </div>
        <div>
          User UserName is
          {usernamecard?.name}
        </div>
        <div>
          User Image is
          <img src={"" + usernamecard?.image}/>
        </div>
        
        </>
    )}


export default OneUserCard