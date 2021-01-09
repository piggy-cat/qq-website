import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div id="contact" className="contact">
        <h1 className="contact-title">CONTACT US</h1>
        <div className="contact-container">
          <img
            src={process.env.PUBLIC_URL + "/images/ggmap.jpg"}
            alt="ggmap"
            className="map-image"
          ></img>

          <div className="form-container">
            <section className="address">
              <p>227 Vodden St E, Brampton, ON L6V 3C9,</p>
              <p>Canada</p>
              <p>netribbon@outlook.com</p>
              <p>Tel: 416-615-3453</p>
            </section>
            <form className="form-input">
              <input
                className="input-class"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="input-class"
                type="text"
                name="email"
                placeholder="Email"
              />
              <input
                className="input-class"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="input-class message"
                type="text"
                name="message"
                placeholder="Type your message here..."
              />

              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
