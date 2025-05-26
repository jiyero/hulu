import React from "react";
import "../styles/HeroCard.scss";
import Buttons from "./Buttons";

const HeroCard = ({
  title,
  imageSrc,
  description,
  buttonText,
  orientation,
}) => {
  return (
    <div className={`hero-card ${orientation}`}>
      {orientation === "horizontal" ? (
        <>
          <img src={imageSrc} alt={title} className="hero-card-image" />

          <div className="text-group">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="terms">What's included?</div>
          </div>

          <div className="button-group">
            {buttonText && <Buttons text={buttonText} variant="mid" />}
            <div className="terms">Terms apply</div>
          </div>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <img src={imageSrc} alt={title} className="hero-card-image" />
          <p>{description}</p>
          {buttonText && <Buttons text={buttonText} />}
          <div className="terms">Terms apply</div>
        </>
      )}
    </div>
  );
};

export default HeroCard;
