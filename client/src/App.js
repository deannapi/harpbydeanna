import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Event from "./components/events";
import About from "./components/about";

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
