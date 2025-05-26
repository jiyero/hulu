import React from "react";
import "../styles/Buttons.scss";

const Buttons = ({ text, variant }) => {
  return (
    <button className={`button ${variant ? `button-${variant}` : ""}`}>
      {text}
    </button>
  );
};

export default Buttons;
