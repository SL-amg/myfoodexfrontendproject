// import React from 'react'
// import { Formik, Form, Field } from "formik";
// import { NavLink, useNavigate } from "react-router-dom";
// import { addCategory } from "../api/users";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { useState } from "react";

// const CreateCategory = () => {


//   const navigate = useNavigate();

//   const mutation = useMutation({
//     mutationFn: (formData) => addCategory(formData),
//     onSuccess: () => {
//       navigate("/categoriesList");
//       const refreshPage = () => {
//           navigate(0);
//       }},
//   });

//   function submit(values) {
//     console.log(values);
//     mutation.mutate(values);
//   }

//   return (
//     <>
//     <div>
//             {/* Formik and rigister div*/}
//             <Formik
//               initialValues={{
//                 name: "",
//                 image: "",
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
//                     <h4>Image</h4>
//                     <Field
//                       placeholder="image"
//                       className="barStyle"
//                       as="input"
//                       name="image"
//                       type="text"
//                     />
//                   </div>
//                   <button className="" type="submit">
//                     Create Catgoires
//                   </button>
//                 </div>
//               </Form>
//             </Formik>
//    </div>
//    </>
//   )
// }

// export default CreateCategory
