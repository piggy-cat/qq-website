import React from "react";
import "./Remove.css";

export default function Remove() {
  return (
    <div className="remove-container">
      <h1 className="rh1">Remove Your IT Obstacles</h1>

      <div className="rip">
        <img
          className="ri"
          src={process.env.PUBLIC_URL + "/images/remove.jpg"}
          alt="removing"
        ></img>
        <p className="rp">
          Whatever issues you have with your IT systems, there is always a
          solution from us. We have 15+ years of IT consulting expertise in
          North America and our valuable clients include Fin-tech giants like
          BMO, IBM and Aviva. We are here to provide insights to remove your IT
          roadblocks in the fastest and most economical way. Start the
          conversation today and every second counts!
        </p>
      </div>
    </div>
  );
}
