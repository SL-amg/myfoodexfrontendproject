import React from 'react'
import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { addCategory } from "../api/users";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import InputModified from "./InputModified";

const CreateCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");


  const mutation = useMutation({
    mutationFn: (newCatigoryData) => addCategory(newCatigoryData),
    onSuccess: () => {
      navigate("/categoriesList");
      const refreshPage = () => {
          navigate(0);
      }},
  });

const handleSubmit=()=>{
  mutation.mutate({
    name: name,
    image: image,
  });
};


  return (
    <>
    <div className='centercreatediv'>
    <InputModified
          name="Catigory Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputModified
          name="Catigory Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }} />
        <button className="buttonCreateRecipy"
       onClick={handleSubmit} >
          Submit
        </button>
   </div>
   </>
  )
}

export default CreateCategory
