import React from 'react'
import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { addRecipe } from "../api/users";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Input from "./Input";
import "../components/CSS files/RecipyCard.css";

const CreateRecipy = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [nutritionFact, setNutritionFact] = useState("");


  const mutation = useMutation({
    mutationFn: (newRecipy) => addRecipe(newRecipy),
    onSuccess: () => {
      navigate("/recipyList");
      const refreshPage = () => {
          navigate(0);
      }},
  });

const handleSubmit=()=>{
  mutation.mutate({
    name: name,
    image: image,
    nutritionFact: nutritionFact,
  });
};

  return (
   <>
    <div className='centercreatediv'>
    <Input
          name="Recipy Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name="Recipy Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }} />
           <Input className="inputtextsize"
          name="Nutrition Fact"
          onChange={(e) => {
            setNutritionFact(e.target.value);
          }} />
        <button className="buttonCreateRecipy"
       onClick={handleSubmit} >
          Submit
        </button>
   </div>
   </>
  )
}

export default CreateRecipy
