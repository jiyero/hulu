import React from "react";
import styles from "./LandingPromotional.module.scss";
import dhe from "../../assets/dhe.png";

const LandingPromotional = () => {
  return (
    <section className={styles["promotional"]}>
      <div className={styles["promotional-container"]}>
        <img src={dhe} alt="logos" className={styles["promotional-image"]} />
        <div className={styles["promotional-text-group"]}>
          <h2 className={styles["promotional-text-group-title"]}>
            DISNEY+, HULU, ESPN+, BUNDLE BASIC
          </h2>
          <p className={styles["promotional-text-group-description"]}>
            Get Hulu, Disney+, and ESPN+, all with ads, for $16.99/mo.
          </p>
          <a href="/" className={styles["promotional-text-group-included"]}>
            What's Included
          </a>
        </div>
        <div className={styles["promotional-container-buttonterms"]}>
          <button className={styles["promotional-button"]}>
            GET ALL THREE
          </button>
          <a href="/" className={styles["promotional-terms"]}>
            Terms apply
          </a>
        </div>
      </div>

      <div className={styles["promotional-container-mobile"]}>
        <h2 className={styles["promotional-mobile-title"]}>
          DISNEY+, HULU, ESPN+, BUNDLE BASIC
        </h2>
        <img
          src={dhe}
          alt="logos"
          className={styles["promotional-mobile-image"]}
        />
        <p className={styles["promotional-mobile-description"]}>
          Get Hulu, Disney+, and ESPN+, all with ads, for $16.99/mo.{" "}
          <a href="/" className={styles["promotional-mobile-included"]}>
            What's included?
          </a>
        </p>

        <button className={styles["promotional-mobile-button"]}>
          GET ALL THREE
        </button>
        <a href="/" className={styles["promotional-mobile-terms"]}>
          Terms apply
        </a>
      </div>
    </section>
  );
};

export default LandingPromotional;
