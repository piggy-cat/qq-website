import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-wrapper">
        <p className="footer-text">© 2021 by Netribbon.</p>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/?lang=zh-cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
