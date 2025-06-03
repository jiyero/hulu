import React from "react";
import "./Select.scss";

const Select = ({ selectedPlan, handleChange }) => {
  return (
    <header className={"plans-top-text"}>
      <h1 className="plans-top-text-title">Select Your Plan</h1>
      <p className="plans-top-text-subtitle">
        No hidden fees, equipment rentals, or installation appointments.
      </p>
      <p className="plans-top-text-switch">Switch plans or cancel anytime.**</p>

      <div className="plans-top-text-dropdown">
        <select id="plan-select" onChange={handleChange} value={selectedPlan}>
          <option value="dh">Disney+, Hulu Bundle</option>
          <option value="dhe">Disney+, Hulu, ESPN+ Bundle</option>
          <option value="dhm">Disney+, Hulu, Max Bundle</option>
          <option value="hltv">Hulu + Live TV</option>
        </select>
      </div>
    </header>
  );
};

export default Select;
