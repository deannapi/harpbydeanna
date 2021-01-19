import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Harp By DeAnna</h1>
          <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
              </ul>
          </nav>
        </header>
      </>
    );
  }
}
