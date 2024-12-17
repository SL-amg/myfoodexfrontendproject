import React from 'react'
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { Login } from "../api/users";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../components/CSS files/LoginUser.css";


const LoginUser = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser) => Login(newUser),
    onSuccess: () => {
      navigate("/main"); // to chage to main later
    },
  });

  function submit(values) {
    console.log(values);
    mutation.mutate(values);
  }

  return (
    <>
    <div className="loginMain">
<div>hello</div>

        <div className="loginInputDiv">
          <h1>Login Your Account</h1>
          <div>
            if you don't have an account, Register
            <NavLink className="textRegister" to="/register"> here</NavLink>
          </div>
          <Formik initialValues={{ username: "", password: "" }} onSubmit={submit}>
            <Form>
              <h4>Username</h4>
              <Field
                as="input"
                name="username"
                type="text"
                placeholder="Username"
                className="barStyle"
              />
              <h4>Password</h4>
              <Field
                as="input"
                name="password"
                type="password"
                placeholder="Password"
                className="barStyle"
              />
              <button className="" type="submit">Login</button>
            </Form>
          </Formik>
        </div>

      </div>
    </>
  )
}

export default LoginUser
