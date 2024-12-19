import React from 'react'
import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { addIngredient } from "../api/users";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";

const CreateIngredient = () => {

    const navigate = useNavigate();

    const mutation = useMutation({
      mutationFn: (newIngredient) => addIngredient(newIngredient),
      onSuccess: () => {
        navigate("/ingredientList");
        const refreshPage = () => {
            navigate(0);
        }},
    });
  
    function submit(values) {
      console.log(values);
      mutation.mutate(values);
    }


  return (
    <>
    <div>
            {/* Formik and rigister div*/}
            <Formik
              initialValues={{
                name: "",
                scale: "",
                amount: "",
              }}
              onSubmit={submit}
            >
              <Form>
                <div>
                  <div>
                    <h4>Name</h4>
                    <Field
                      placeholder="name"
                      className="barStyle"
                      as="input"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <h4>scale</h4>
                    <Field
                      placeholder="scale"
                      className="barStyle"
                      as="input"
                      name="scale"
                      type="text"
                    />
                  </div>
                  <div>
                    <h4>amount</h4>
                    <Field
                      placeholder="amount"
                      className="barStyle"
                      as="input"
                      name="amount"
                      type="text"
                    />
                  </div>
                  <button className="" type="submit">
                    Create Ingredient
                  </button>
                </div>
              </Form>
            </Formik>
   </div>
   </>
  )
}

export default CreateIngredient
