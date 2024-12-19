import React from "react";

const Input = ({ name, onChange }) => {
  return (
    <div >
      <h1 >{name}</h1>
      <input
        onChange={onChange}
        placeholder={name}
      />
    </div>
  );
};

export default Input;
