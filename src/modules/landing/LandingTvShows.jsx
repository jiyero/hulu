import React from "react";

import styles from "./LandingTvShows.module.scss";

import TvCard from "../../components/tvcard/TvCard";

import family from "../../assets/family.jpeg";
import apes from "../../assets/apes.jpeg";
import shogun from "../../assets/shogun.jpeg";
import hod from "../../assets/hod.jpeg";

const tvCards = [
  {
    description: "Past & Current Shows",
    title: "TV Shows",
    imageSrc: family,
  },

  {
    description: "New & Classic",
    title: "Movies",
    imageSrc: apes,
  },

  {
    description: "Groundbreaking",
    title: "Hulu Originals",
    imageSrc: shogun,
  },

  {
    description: "Add-on",
    title: "Premiums",
    imageSrc: hod,
    disclaimer: " Premium network add-ons available for an additional cost",
  },
];
const TvShows = () => {
  return (
    <>
      <section className={styles["tv-shows"]}>
        <h4 className={styles["tv-shows-subtitle"]}>INCLUDED IN ALL PLANS</h4>
        <h2 className={styles["tv-shows-large-text"]}>All The TV You Love</h2>
        <p className={styles["tv-shows-description"]}>
          Watch full seasons of exclusive streaming series, current-season
          episodes, hit movies, Hulu Originals, kids shows, and more.
        </p>

        <div className={styles["tv-shows-card-list"]}>
          {tvCards.map((cards, i) => (
            <TvCard
              description={cards.description}
              title={cards.title}
              imageSrc={cards.imageSrc}
              disclaimer={cards.disclaimer}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TvShows;
