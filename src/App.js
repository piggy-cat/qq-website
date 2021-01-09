import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Protect from "./components/pages/Protect";
import Design from "./components/pages/Design";
import Remove from "./components/pages/Remove";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/protect-your-application-and-data"
            component={Protect}
          />
          <Route path="/design-your-future" component={Design} />
          <Route path="/remove-your-it-obstacles" component={Remove} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
