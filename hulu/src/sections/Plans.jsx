import React, { useState } from "react";
import { plansData } from "../data/plansData";
import "../styles/Plans.scss";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("dh");
  const [showAddons, setShowAddons] = useState(false);

  const currentPlan = plansData[selectedPlan];

  const handleChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const toggleAddons = () => {
    setShowAddons((prev) => !prev);
  };

  return (
    <section className="plans">
      <header className="top-text">
        <h1>Select Your Plan</h1>
        <p>No hidden fees, equipment rentals, or installation appointments.</p>
        <p>
          <strong>Switch plans or cancel anytime.**</strong>
        </p>

        <div className="plan-dropdown">
          <select id="plan-select" onChange={handleChange} value={selectedPlan}>
            <option value="dh">Disney+, Hulu Bundle</option>
            <option value="dhe">Disney+, Hulu, ESPN+ Bundle</option>
            <option value="dhm">Disney+, Hulu, Max Bundle</option>
            <option value="hltv">Hulu + Live TV</option>
          </select>
        </div>
      </header>

      {currentPlan && (
        <div className="plans-table">
          <table>
            <thead>
              <tr>
                <th></th>
                {currentPlan.columns.map((col, i) => (
                  <th key={i}>
                    <img src={col.image} alt={col.label} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentPlan.titles.map((title, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{title}</td>
                  {currentPlan.columns.map((col, colIndex) => (
                    <td key={colIndex}>{col.values[rowIndex]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="disclaimer">
            {currentPlan.disclaimer.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {currentPlan.addons && (
            <div className="addons-section">
              <div className="addons-wrapper">
                <button className="toggle-button" onClick={toggleAddons}>
                  {showAddons ? "Hide Add-ons" : "Show Add-ons"}
                </button>

                {showAddons && (
                  <>
                    <h2>Available Add-ons</h2>
                    <table className="addons-table">
                      <tbody>
                        <tr>
                          <td colSpan="3">
                            Add-ons available at an additional cost.
                            <br />
                            Add them up after you sign up for Hulu.
                          </td>
                        </tr>
                        {currentPlan.addons.map((addon, index) => (
                          <tr key={index}>
                            <td>{addon.name}</td>
                            <td>{addon.basic}</td>
                            <td>{addon.premium}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Plans;
