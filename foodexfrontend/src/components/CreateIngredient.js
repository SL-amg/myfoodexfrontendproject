import React from 'react'
import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { addIngredient } from "../api/users";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Input from "./Input";

const CreateIngredient = () => {

   
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [scale, setScale] = useState("");
  const [amount, setAmount] = useState("");

  const mutation = useMutation({
    mutationFn: (newIngredient) => addIngredient(newIngredient),
    onSuccess: () => {
      navigate("/ingredientList");
      const refreshPage = () => {
          navigate(0);
      }},
  });

const handleSubmit=()=>{
  mutation.mutate({
    name: name,
    image: image,
    scale: scale,
    amount: amount,
  });
};

  return (
    <>
    <div className='centeringreditendiv'>
    <Input
          name="Ingredient Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name="Ingredient Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }} />
                     <Input
          name="Scale"
          onChange={(e) => {
            setScale(e.target.value);
          }} />
           <Input
          name="Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }} />
        <button  className='buttonIngredietnCreate'
       onClick={handleSubmit} >
          Submit
        </button>
   </div>
   </>
  )
}

export default CreateIngredient
