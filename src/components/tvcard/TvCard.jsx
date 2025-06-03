import React from "react";
import "./TvCard.scss";

const TvCard = ({ imageSrc, title, description, disclaimer }) => {
  return (
    <>
      <div className="tv-card">
        <div className="tv-card-container">
          <img src={imageSrc} alt={title} className="tv-card-container-image" />
          <div className="tv-card-container-overlay">
            <h3 className="tv-card-container-overlay-description">
              {description}
            </h3>
            <h4 className="tv-card-container-overlay-title">{title}</h4>
          </div>
        </div>

        <small className="tv-card-disclaimer">{disclaimer} </small>
      </div>
    </>
  );
};

export default TvCard;
