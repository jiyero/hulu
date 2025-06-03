import React from "react";
import "./Dropdown.scss";

const Dropdown = ({
  browseLinks1,
  browseLinks2,
  browseLinks3,
  browseLinks4,
  helpLinks,
  aboutLinks,
}) => {
  return (
    <div className="dropdown">
      <div className="dropdown-box">
        <details className="dropdown-box-details">
          <summary className="dropdown-box-details-summary">Browse</summary>
          <div className="dropdown-box-details-browse">
            <ul>
              {browseLinks1.map((i) => {
                return (
                  <li>
                    <a href="/">{i}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {browseLinks2.map((i) => {
                return (
                  <li>
                    <a href="/">{i}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {browseLinks3.map((i) => {
                return (
                  <li>
                    <a href="/">{i}</a>
                  </li>
                );
              })}
            </ul>

            <ul>
              {browseLinks4.map((i) => {
                return (
                  <li>
                    <a href="/">{i}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      </div>

      <div className="dropdown-box-help">
        <details className="dropdown-box-help-details">
          <summary className="dropdown-box-help-summary">Help</summary>
          <ul>
            {helpLinks.map((i) => {
              return (
                <li>
                  <a href="/">{i}</a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>

      <div className="dropdown-box-about">
        <details className="dropdown-box-about-details">
          <summary className="dropdown-box-about-summary">About Us</summary>
          <ul>
            {aboutLinks.map((i) => {
              return (
                <li>
                  <a href="/">{i}</a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Dropdown;
