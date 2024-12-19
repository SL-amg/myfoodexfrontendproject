import React from 'react'
import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "./Input";
import {updateProfileUser} from "../api/users"


const UpdateProfile = () => {

    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (updateUser) => updateProfileUser(updateUser),
    onSuccess: () => {
      navigate("/profile");
      const refreshPage = () => {
          navigate(0);
      }},
  });

  const handleSubmit=()=>{
    mutation.mutate({
      name: name,
      image: image,
      username: username,
      password: password,
    });
  };
  return (
    <div>
      <Input
          name="User Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
         <Input
          name="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name="Profile Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }} />
           <Input
          name="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }} />
        <button 
       onClick={handleSubmit} >
          Register
        </button>
    </div>
  )
}

export default UpdateProfile
