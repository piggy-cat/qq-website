import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards-section">
      <div className="cards-container">
        <ul className="cards-wrapper">
          <li className="item">
            <h2 className="item-title">Protect Your Application and Data</h2>
            <p className="item-text">
              We provide industry leading solution to protect your technology
              and identity.
            </p>
            <Link
              to="/protect-your-application-and-data"
              className="item-button"
            >
              More Info
            </Link>
          </li>
          <li className="item">
            <h2 className="item-title">Design Your Future</h2>
            <p className="item-text">
              We enable your future by designing the most desirable solution to
              suit your needs.
            </p>
            <Link to="/design-your-future" className="item-button">
              More Info
            </Link>
          </li>
          <li className="item">
            <h2 className="item-title">Remove Your Road blocks</h2>
            <p className="item-text">
              Whatever issues you have with your IT systems, there is always a
              solution from us.
            </p>
            <Link to="/remove-your-it-obstacles" className="item-button">
              More Info
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
