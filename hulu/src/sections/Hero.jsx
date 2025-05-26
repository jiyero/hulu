import React from "react";
import "../styles/Hero.scss";
import HeroCard from "../components/HeroCard";
import Buttons from "../components/Buttons";
import dh from "../assets/dh.png";
import dhe from "../assets/dhe.png";
import dhm from "../assets/dhm.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <HeroCard
          title="DISNEY+, HULU BUNDLE BASIC"
          imageSrc={dh}
          description="Both with ads, for $10.99/month."
          buttonText="GET THEM BOTH"
        />

        <HeroCard
          title="DISNEY+, HULU, MAX BUNDLE"
          imageSrc={dhm}
          description="Plans starting at $16.99/month."
          buttonText="LEARN MORE"
        />
      </section>

      <section className="mid-hero">
        <HeroCard
          title="DISNEY+, HULU, ESPN+, BUNDLE BASIC"
          imageSrc={dhe}
          description="Get Hulu, Disney+, and ESPN+, all with ads, for $16.99/mo."
          buttonText="GET ALL THREE"
          orientation="horizontal"
        />
      </section>

      <section className="bot-hero">
        <p>BUILD THE PLAN THAT'S RIGHT FOR YOU</p>
        <Buttons text="START BUILDING" variant="bot" />
      </section>
    </>
  );
};

export default Hero;
