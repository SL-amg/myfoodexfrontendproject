// to get all the users form the Server Side

import React from "react";
import { useQuery } from "@tanstack/react-query";
import OneUserCard from "./OneUserCard";
import { getAllUsers } from "../api/users";

const UsernameList = () => {
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["userList"],
    queryFn: getAllUsers,
  });

  const usernameCardView = data?.map((usernamecard) => (
    <OneUserCard
      usernamecard={usernamecard}
      key={usernamecard?.id}
      name={usernamecard?.name}
      image={usernamecard?.image}
    />
  ));

  return <div>{usernameCardView}</div>;
};

export default UsernameList;
