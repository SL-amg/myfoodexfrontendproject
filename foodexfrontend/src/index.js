import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//----------- Components Import

import Home from "./components/Home";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import MainUserPage from './components/MainUserPage';
import CategoryList from './components/CategoryList';
import RecipyList from './components/RecipyList';
import IngredientList from './components/IngredientList';
import UsernameList from './components/UsernameList';

//-----------

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <NavBar />
      <Home />
      <Footer />
      </>
    ),
  },
  {
    path: "/Register",
    element: (
      <>
        <NavBar />
        <RegisterUser />
        <Footer />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <NavBar />
        <LoginUser />
        <Footer />
      </>
    ),
  },
  {
    path: "/main",
    element: (
      <>
        <MainUserPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/categoriesList", // for testing
    element: (
      <>
        <CategoryList />
        <Footer />
      </>
    ),
  },
  {
    path: "/recipyList", // for testing
    element: (
      <>
        <RecipyList />
        <Footer />
      </>
    ),
  },
  {
    path: "/ingredientList", // for testing
    element: (
      <>
        <IngredientList />
        <Footer />
      </>
    ),
  },
  {
    path: "/allusers", // for testing
    element: (
      <>
        <UsernameList />
        <Footer />
      </>
    ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();