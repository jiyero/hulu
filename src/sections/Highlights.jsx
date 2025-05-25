//Highlights.jsx
import React, { useState } from "react";
import HighlightOption from "../components/HighlightOption";
import { highlightData } from "../data/highlightData";
import "../styles/Highlights.scss";
import useHighlightAnimation from "../hooks/useHighlightAnimation";

const Highlights = () => {
  const [activeKey, setActiveKey] = useState("sports");
  const { title, description, background, logos } = highlightData[activeKey];
  const animateContent = useHighlightAnimation(activeKey);

  return (
    <section
      className="highlights"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="highlight-tab-container">
        <div className="highlight-options">
          {Object.entries(highlightData).map(([key, option]) => (
            <HighlightOption
              key={key}
              label={option.title}
              isActive={activeKey === key}
              onClick={() => setActiveKey(key)}
            />
          ))}
        </div>

        <div
          className={`highlight-content ${animateContent ? "fade-in-up" : ""}`}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="logo-circles">
            {logos.map((logo, index) => (
              <div className="logo-circle" key={index}>
                <img src={logo} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
          <p className="disclaimer">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
