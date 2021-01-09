import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "30%", height: "50%" }}
        zoom={14}
        initialCenter={{
          lat: 43.70284221437839,
          lng: -79.7561515531371,
        }}
      >
        <Marker title={"Netribbon"} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBIG0hzWMxXmuQBVRuCoIZ1I6JAelmKLPY",
})(MapContainer);
