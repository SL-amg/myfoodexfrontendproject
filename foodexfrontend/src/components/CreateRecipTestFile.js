// import React from 'react'
// import { Formik, Form, Field } from "formik";
// import { NavLink, useNavigate } from "react-router-dom";
// import { addRecipe } from "../api/users";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { useState } from "react";

// const CreateRecipy = () => {
//     const navigate = useNavigate();

//     const mutation = useMutation({
//       mutationFn: (newRecipy) => addRecipe(newRecipy),
//       onSuccess: () => {
//         navigate("/recipyList");
//         const refreshPage = () => {
//             navigate(0);
//         }},
//     });
  
//     function submit(values) {
//       console.log(values);
//       mutation.mutate(values);
//     }

//   return (
//    <>
//     <div>
//             {/* Formik and rigister div*/}
//             <Formik
//               initialValues={{
//                 name: "",
//                 image: "",
//                 nutritionFact: "",
//               }}
//               onSubmit={submit}
//             >
//               <Form>
//                 <div>
//                   <div>
//                     <h4>Name</h4>
//                     <Field
//                       placeholder="name"
//                       className="barStyle"
//                       as="input"
//                       name="name"
//                       type="text"
//                     />
//                   </div>
//                   <div>
//                     <h4>image</h4>
//                     <Field
//                       placeholder="image"
//                       className="barStyle"
//                       as="input"
//                       name="image"
//                       type="text"
//                     />
//                   </div>
//                   <div>
//                     <h4>nutritionFact</h4>
//                     <Field
//                       placeholder="nutritionFact"
//                       className="barStyle"
//                       as="input"
//                       name="nutritionFact"
//                       type="text"
//                     />
//                   </div>
//                   <button className="" type="submit">
//                     Create Recipy
//                   </button>
//                 </div>
//               </Form>
//             </Formik>
//    </div>
//    </>
//   )
// }

// export default CreateRecipy
