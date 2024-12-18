//this is one User card
import React from "react";
import "../components/CSS files/UserCard.css";

function OneUserCard({ usernamecard, name, image, username, passwrod }) {
  return (
    <>
      <div className="recipyDiv">
        <div className="recipyAction">
          <div>
            <p className="recipyTextDiv">Name </p>
            <h2 className="recipyTextresaltsDiv">{usernamecard?.username} </h2>
          </div>

          <div>
            <p className="recipyTextDiv">Name </p>
            <h2 className="recipyTextresaltsDiv">{usernamecard?.name} </h2>
          </div>

          <div>
            <p className="recipyTextDiv">User Image is </p>
            <img className="recipyImage" src={"" + usernamecard?.image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OneUserCard;
