//this is one User card
import React from "react";
import "../components/CSS files/UserCard.css";

function OneUserCard({ usernamecard, name, image, username, passwrod }) {
  return (
    <>
      <div className="userssDiv">
        <div className="userssAction">
          <div>
            <p className="userssTextDiv">Name </p>
            <h2 className="userssTextresaltsDiv">{usernamecard?.username} </h2>
          </div>

          <div>
            <p className="userssTextDiv">Name </p>
            <h2 className="userssTextresaltsDiv">{usernamecard?.name} </h2>
          </div>

          <div>
            <p className="userssTextDiv">User Image is </p>
            <img className="userssImage" src={"" + usernamecard?.image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OneUserCard;
