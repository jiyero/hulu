import React from "react";
import "../styles/TvShows.scss";
import TvCard from "../components/TvCard";
import family from "../assets/family.jpeg";
import apes from "../assets/apes.jpeg";
import shogun from "../assets/shogun.jpeg";
import hod from "../assets/hod.jpeg";
import Buttons from "../components/Buttons";

const TvShows = () => {
  return (
    <section className="tv-shows">
      <h4 className="subtitle">INCLUDED IN ALL PLANS</h4>
      <h2>All The TV You Love</h2>
      <p className="description">
        Watch full seasons of exclusive streaming series, current-season
        episodes, hit movies, Hulu Originals, kids shows, and more.
      </p>

      <div className="tv-card-list">
        <TvCard
          description="Past & Current Seasons"
          title="TV Shows"
          imageSrc={family}
        />

        <TvCard description="New & Classic" title="Movies" imageSrc={apes} />

        <TvCard
          description="Groundbreaking"
          title="Hulu Originals"
          imageSrc={shogun}
        />

        <TvCard description="Add-on" title="Premiums" imageSrc={hod} />
      </div>
      <h4 className="subtitle">TRY HULU (WITH ADS)+LIVE TV FREE FOR 3 DAYS</h4>
      <h2>Watch Live TV From 95+ Channels</h2>
      <p className="description">
        Get top national and local channels on Hulu (With Ads) + Live TV with
        your favorite live sports, news, and events - plus the entire Hulu
        streaming library. With Unlimited DVR, store Live TV recordings for up
        to nine months and fast-forward through your DVR content. Includes
        access to endless entertainment with Disney+ and live sports with ESPN+.
      </p>

      <Buttons text="START YOUR FREE TRIAL" />
      <p className="disclaimer">
        Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if
        any) unless canceled. Cancel anytime. Regional restrictions, blackouts
        and Live TV terms apply. Access content from each service separately.
        Location data required to watch certain content. Offer valid for
        eligible subscribers only. See details.
      </p>
      <button className="view-channels">VIEW CHANNELS IN YOUR AREA →</button>
    </section>
  );
};

export default TvShows;
