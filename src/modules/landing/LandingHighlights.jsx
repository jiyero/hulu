import React, { useState, useEffect } from "react";

import HighlightOption from "../../components/highlightoption/HighlightOption";
import { highlightData } from "../../data/highlightData";

import styles from "./LandingHighlights.module.scss";

import useHighlightAnimation from "../../hooks/useHighlightAnimation";

const Highlights = () => {
  const [activeKey, setActiveKey] = useState("sports");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const { title, description, background, backgroundMobile, logos } =
    highlightData[activeKey];
  const animateContent = useHighlightAnimation(activeKey);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bg = isMobile ? backgroundMobile : background;

  return (
    <section
      className={styles["highlights"]}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles["highlights-container"]}>
        <div className={styles["highlights-container-options"]}>
          {Object.entries(highlightData).map(([key, option]) => (
            <HighlightOption
              key={key}
              label={option.title}
              isActive={activeKey === key}
              onClick={() => setActiveKey(key)}
              className={`${styles["highlights-container-options-button"]} ${
                activeKey === key ? styles["active"] : ""
              }`}
            />
          ))}
        </div>

        <div
          className={`${styles["highlights-container-content"]} ${
            animateContent ? styles["fade-in-up"] : ""
          }`}
        >
          <h2 className={styles["highlights-container-content-title"]}>
            {title}
          </h2>
          <p className={styles["highlights-container-content-description"]}>
            {description}
          </p>
          <div className={styles["highlights-container-content-logo"]}>
            {logos.map((logo, index) => (
              <div
                className={styles["highlights-container-content-logo-circle"]}
                key={index}
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className={
                    styles["highlights-container-content-logo-circle-image"]
                  }
                />
              </div>
            ))}
          </div>
          <p className={styles["highlights-container-content-disclaimer"]}>
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply.
            <a
              href="/"
              className={styles["highlights-container-content-disclaimer-link"]}
            >
              See details
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
