import React from "react";
import "../components/CSS files/inputModified.css";

const InputModified = ({ name, onChange }) => {
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

export default InputModified;
