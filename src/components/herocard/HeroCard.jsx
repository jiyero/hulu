import React from "react";
import "./HeroCard.scss";
import Button from "../button/Button";

const HeroCard = ({ title, imageSrc, description, buttonText }) => {
  return (
    <div className="hero-card">
      <h2 className="hero-card-title">{title}</h2>
      <img src={imageSrc} alt={title} className="hero-card-image" />
      <p className="hero-card-description">{description}</p>
      {buttonText && <Button text={buttonText} variant="hero" />}
      <a href="/" className="hero-card-terms">
        Terms apply
      </a>
    </div>
  );
};

export default HeroCard;
