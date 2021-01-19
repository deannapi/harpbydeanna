import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../client/src/components/header";
import Home from "../client/src/components/home";
import Footer from "../client/src/components/footer";
import Contact from "../client/src/components/contact";
import Event from "../client/src/components/events";
import About from "../client/src/components/about";

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Event} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
