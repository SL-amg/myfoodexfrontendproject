import React from 'react'
import "../components/CSS files/RegisterUser.css";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import {registerAccount} from "../api/users"
import { NavLink, useNavigate } from "react-router-dom";


const RegisterUser = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser) => registerAccount(newUser),
    onSuccess: () => {
      navigate("/xxx"); //to change to main later
    },
  });

  function submit(values) {
    console.log(values);
    mutation.mutate(values);
  }
  return (
    <> 
    <div className='mainDivRegister'>
{/* Register div*/}
<div className="registerInputDiv">
        <h1>Register Your Account</h1>
        <div>
          <p>Existing Customer, Please Login </p>
          <NavLink className="textRegister" to="/Login">Here</NavLink>
        </div>
        <div>
          {/* Formik and rigister div*/}
          <Formik
            initialValues={{ username: "", name:"", image: "", password: "" }}
            onSubmit={submit}
          >
            <Form>
              <div>
                <div>
                  <h4>UserName</h4>
                  <Field
                    placeholder="username"
                    className="barStyle"
                    as="input"
                    name="username"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Name</h4>
                  <Field
                    placeholder="Name"
                    className="barStyle"
                    as="input"
                    name="name"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Image</h4>
                  <Field
                    placeholder="Image Url"
                    className="barStyle"
                    as="input"
                    name="image"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Password</h4>
                  <Field
                    placeholder="Password"
                    className="barStyle"
                    as="input"
                    name="password"
                    type="password"
                  />
                </div>

                <button className="" type="submit">
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

    </div>

    </>

  )
}

export default RegisterUser
