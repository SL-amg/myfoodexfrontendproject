import React from "react";
import "../components/CSS files/input.css";

const Input = ({ name, onChange }) => {
  return (
    <div className="" >
      <h1 className="inputregistertext">{name}</h1>
      <input className="inpurtregisterbar"
        onChange={onChange}
        placeholder={name}
      />
    </div>
  );
};

export default Input;
