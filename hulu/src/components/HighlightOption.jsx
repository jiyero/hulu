//HighlightOptions.jsx
import React from "react";

const HighlightOption = ({ label, isActive, onClick }) => (
  <button className={isActive ? "active" : ""} onClick={onClick}>
    {label}
  </button>
);

export default HighlightOption;
