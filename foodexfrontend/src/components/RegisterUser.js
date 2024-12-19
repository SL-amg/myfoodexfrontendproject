import React from "react";
import "../components/CSS files/RegisterUser.css";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { registerAccount } from "../api/users";
import { useState } from "react";
import Input from "./Input";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (newUser) => registerAccount(newUser),
    onSuccess: () => {
      navigate("/login");
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
    <>
      <div className="mainDivRegister">
        {/* Register div*/}
        <div className="registerInputDiv">
          <h1>Register Your Account</h1>
          <div>
            <p>Existing Customer, Please Login </p>
            <NavLink className="textRegister" to="/Login">
              Here
            </NavLink>
          </div>
          <div>
            {/* Formik and rigister div*/}
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
            
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
