import React, { Component } from "react";
import "./Contact.css";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

class Contact extends Component {
  state = { showingInfoWindow: true, activeMarker: {}, selectedPlace: {} };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div id="contact" className="contact">
        <h1 className="contact-title">CONTACT US</h1>
        <div className="contact-container">
          {/* <div className="map-container">
            <Map
              style={{ width: "30%", height: "50%" }}
              google={this.props.google}
              zoom={14}
              initialCenter={{
                lat: 43.70284221437839,
                lng: -79.7561515531371,
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                title={"Netribbon"}
                name={"Netribbon"}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h2>{this.state.selectedPlace.name}</h2>
                </div>
              </InfoWindow>
            </Map>
          </div> */}
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyBIG0hzWMxXmuQBVRuCoIZ1I6JAelmKLPY",
})(Contact);
