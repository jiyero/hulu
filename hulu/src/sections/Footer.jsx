import React from "react";
import "../styles/Footer.scss";
import fb from "../assets/footer/facebook.svg";
import ig from "../assets/footer/instagram.svg";
import x from "../assets/footer/x_logo.svg";
import yt from "../assets/footer/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-box browse-box">
            <h3>Browse</h3>
            <div className="browse-columns">
              <ul>
                <li>Streaming Library</li>
                <li>Live TV</li>
                <li>Live News</li>
                <li>Live Sports</li>
              </ul>
              <ul>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Originals</li>
                <li>Networks</li>
                <li>Kids</li>
                <li>FX</li>
              </ul>
              <ul>
                <li>Max</li>
                <li>Cinemax</li>
                <li>Paramount+ with SHOWTIME</li>
                <li>STARZ</li>
              </ul>
              <ul>
                <li>Disney+, Hulu, ESPN+ Bundle Basic</li>
                <li>Disney+, Hulu, ESPN+ Bundle Premium</li>
                <li>Disney+, Hulu Bundle</li>
                <li>Disney+, Hulu, Max Bundle</li>
                <li>Student Discount</li>
              </ul>
            </div>
          </div>

          <div className="footer-box small-box">
            <h3>Help</h3>
            <ul>
              <li>Account & Billing</li>
              <li>Plans & Pricing</li>
              <li>Supported Devices</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="footer-box small-box">
            <h3>About Us</h3>
            <ul>
              <li>Shop Hulu</li>
              <li>Press</li>
              <li>Jobs</li>
              <li>Contact</li>
              <li>Guides | What to Watch</li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ig} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="X" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={yt} alt="YouTube" />
          </a>
        </div>
        <div className="footer-policies">
          <ul>
            <li>© 2025 Hulu, LLC</li>
            <li>About Ads</li>
            <li>Subscriber Agreement</li>
            <li>Privacy Policy</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Your US State Privacy Rights</li>
            <li>TV Parental Guidelines</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
