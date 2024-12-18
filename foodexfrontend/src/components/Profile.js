import React from 'react'
import { useQuery } from "@tanstack/react-query";


const Profile = () => {
    const { data } = useQuery({
        queryKey: ["profiles"],
        queryFn: getProfile,
      });
      console.log(data);

  return (
    <>
    </>
  )
}

export default Profile
