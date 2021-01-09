import React, { Component } from "react";
import Cards from "../Cards";
import AboutUs from "../AboutUs";
import HomeImg from "../HomeImg";
// import Map from "../Map";
import Contact from "../Contact";

class Home extends Component {
  render() {
    return (
      <>
        <HomeImg></HomeImg>
        <Cards></Cards>
        <AboutUs></AboutUs>
        <Contact></Contact>
      </>
    );
  }
}

export default Home;
