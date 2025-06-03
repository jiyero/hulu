import React, { useState } from "react";
import { plansData } from "../../data/plansData";
import arrow from "../../assets/arrow.svg";
import styles from "./LandingPlans.module.scss";
import Select from "../../components/select/Select";

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
    <section className={styles["plans"]}>
      <Select selectedPlan={selectedPlan} handleChange={handleChange} />

      {currentPlan && (
        <div className={styles["plans-table"]}>
          <table className={styles["table-desktop"]}>
            <thead>
              <tr>
                <th></th>
                {currentPlan.columns.map((col, i) => (
                  <th key={i}>
                    <div className={styles["plan-header"]}>
                      <img src={col.image} alt={col.label} />
                      <p className={styles["label"]}>{col.label}</p>
                      <button className={styles["price"]}>{col.price}</button>
                      <span className={styles["deal"]}>{col.deal}</span>
                    </div>
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

          <table className={styles["table-tablet"]}>
            <thead>
              {currentPlan.columns.map((col, i) => (
                <th key={i}>
                  <div className={styles["plan-header"]}>
                    <img src={col.image} alt={col.label} />
                    <p className={styles["label"]}>{col.label}</p>
                    <button className={styles["price"]}>{col.price}</button>
                    <span className={styles["deal"]}>{col.deal}</span>
                  </div>
                </th>
              ))}
            </thead>

            <tbody>
              {currentPlan.titles.map((title, i) => (
                <tr key={i}>
                  <td>
                    <span className={styles["value-left"]}>
                      {currentPlan.columns[0].values[i]}
                    </span>
                  </td>
                  <td>
                    <span className={styles["title"]}>{title}</span>
                  </td>
                  <td>
                    <span className={styles["value-right"]}>
                      {currentPlan.columns[1].values[i]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles["disclaimer"]}>
            {currentPlan.disclaimer.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {currentPlan.addons && (
            <div className={styles["addons-wrapper"]}>
              {showAddons && (
                <div className="addons-container">
                  <h2>Available Add-ons</h2>
                  <table className={styles["addons-desktop"]}>
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

                  <table className={styles["addons-tablet"]}>
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
                          <td>{addon.basic}</td>
                          <td>{addon.name}</td>
                          <td>{addon.premium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <button
                className={styles["toggle-button"]}
                onClick={toggleAddons}
              >
                {showAddons ? (
                  <>
                    Hide-Addons{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles["arrow-hide"]}
                    />
                  </>
                ) : (
                  <>
                    Show-Adons{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles["arrow-show"]}
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Plans;
