import React from "react";
import "./Protect.css";

export default function Protect() {
  return (
    <div className="protect-container">
      <h1 className="ph1">Protect Your Application and Data</h1>

      <div className="pip">
        <img
          className="pi"
          src={process.env.PUBLIC_URL + "/images/protect.png"}
          alt="protectimg"
        ></img>
        <p className="pp">
          We have been guiding our clients since inception through Security,
          Policy, Process, Operations and Technology decisions. Our Professional
          Services team is experienced in such disciplines as Security
          Architecture and Policy, Threat Risk Assessment, Penetration Testing,
          Vulnerability Assessment, Hardware and Software Hardening, Certificate
          Authorities, Multi-factor Authentication and Technology selection. We
          maintain the Industry Accreditations and Security Clearances required.
          We can provide virtual Chief Information Security Officer services and
          capabilities to our clients. Speak to us to get your systems protected
          today!
        </p>
      </div>
    </div>
  );
}
