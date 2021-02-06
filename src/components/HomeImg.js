import React from "react";
import "./HomeImg.css";

function HomeImg() {
  return (
    <div className="img-container">
      <img
        className="hi"
        src={process.env.PUBLIC_URL + "/images/home.png"}
        alt="HOME"
      ></img>
    </div>
  );
}

export default HomeImg;
