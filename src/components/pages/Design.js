import React from "react";
import "./Design.css";

export default function Design() {
  return (
    <div className="design-container">
      <h1 className="dh1">Design Your Future</h1>

      <div className="dip">
        <img
          className="di"
          src={process.env.PUBLIC_URL + "/images/design.JPG"}
          alt="designimg"
        ></img>
        <p className="dp">
          We enable your future by designing the most desirable solution to suit
          your needs. Whether you are small business or large enterprise, we are
          here to support your business by providing the most state-of-art
          technology across different domains. We have proven records of
          successfully delivering messaging, insurance, payment and identity
          proofing and management systems across the globe. The solutions are
          guaranteed to be scalable and secure, and you have the options to
          deploy it either on-premise or on the cloud. Contact us to have your
          free consultation today!
        </p>
      </div>
    </div>
  );
}
