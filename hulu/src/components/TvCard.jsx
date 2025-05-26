import React from "react";
import "../styles/TvCard.scss";

const TvCard = ({ imageSrc, title, description }) => {
  return (
    <div className="tv-card">
      <img src={imageSrc} alt={title} className="tv-card-image" />
      <div className="tv-card-overlay">
        <h3 className="tv-card-description">{description}</h3>
        <h4 className="tv-card-title">{title}</h4>
      </div>
    </div>
  );
};

export default TvCard;
