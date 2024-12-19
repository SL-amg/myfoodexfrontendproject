import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCatogaries } from "../api/users";
import UserPageOneCatigoryCard from "./UserPageOneCatigoryCard";

const UserCategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categoryList"], // Query key
    queryFn: getAllCatogaries, // Query function
  });


    console.log(data);
  
  return (
    <div>
      <div className="">
        <div className="">
          {data?.allCategories.map((category) => (
            <UserPageOneCatigoryCard key={category.id} data={category?.name} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default UserCategoryList
