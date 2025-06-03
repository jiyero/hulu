import React from "react";
import "./Button.scss";

const Button = ({ text, variant }) => {
  return (
    <button className={`button ${variant ? `button-${variant}` : ""}`}>
      {text}
    </button>
  );
};

export default Button;
