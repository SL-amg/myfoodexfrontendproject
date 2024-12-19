import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../api/users";
import "../components/CSS files/Profile.css";

const Profile = () => {
    const { data } = useQuery({
        queryKey: ["profiles"],
        queryFn: getUserDetails,
      });
      console.log(data);

  return (
    <>
    <div className="profileBackground">
      <div className="centerProfile">
        <div className="profileAction" >
          <div>
            <h1 className="profileWelcome">Welcome</h1>
            <h2 className="profileNamediv">{data?.name}</h2>
          </div>

          <div>
            <img
            className="recipyImage"
            src={data?.image}
             />
          </div>
          <div className="balanceMainDiv">
            <h2>UserName:</h2>
            <div className="balanceDiv">
              <h2 className="profileNamediv">{data?.username} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Profile
