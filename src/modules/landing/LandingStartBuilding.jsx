import React from "react";

import styles from "./LandingStartBuilding.module.scss";
import Button from "../../components/button/Button";

const LandingStartBuilding = () => {
  return (
    <section className={styles["start-building"]}>
      <p className={styles["start-building-text"]}>
        BUILD THE PLAN THAT'S RIGHT FOR YOU
      </p>
      <Button text="START BUILDING" variant="bot" />
    </section>
  );
};

export default LandingStartBuilding;
