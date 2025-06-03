import React from "react";

import styles from "./LandingWatchLive.module.scss";
import Button from "../../components/button/Button";

const LandingWatchLive = () => {
  return (
    <section className={styles["watch-live"]}>
      <h4 className={styles["watch-live-subtitle"]}>
        TRY HULU (WITH ADS)+LIVE TV FREE FOR 3 DAYS
      </h4>
      <h2 className={styles["watch-live-title"]}>
        Watch Live TV From 95+ Channels
      </h2>
      <p className={styles["watch-live-description"]}>
        Get top national and local channels on Hulu (With Ads) + Live TV with
        your favorite live sports, news, and events - plus the entire Hulu
        streaming library. With Unlimited DVR, store Live TV recordings for up
        to nine months and fast-forward through your DVR content. Includes
        access to endless entertainment with Disney+ and live sports with ESPN+.
      </p>

      <Button text="START YOUR FREE TRIAL" variant="tv-shows" />
      <p className={styles["watch-live-disclaimer"]}>
        Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if
        any) unless canceled. Cancel anytime. Regional restrictions, blackouts
        and Live TV terms apply. Access content from each service separately.
        Location data required to watch certain content. Offer valid for
        eligible subscribers only. See details.
      </p>

      <a href="/" className={styles["watch-live-channel"]}>
        VIEW CHANNELS IN YOUR AREA →
      </a>
    </section>
  );
};

export default LandingWatchLive;
