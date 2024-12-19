import React from "react";

const UserPageOneCatigoryCard = ({ categorycard, name, image }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{categorycard?.name}</h2>
          </div>

          <div>
            <img className="" src={"" + categorycard?.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageOneCatigoryCard;
