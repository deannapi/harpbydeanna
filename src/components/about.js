import React from "react";
import harp3 from "../images/Harp3.jpeg";

export default class About extends React.Component {
  render() {
    return (
      <div class="about">
        <h2>About Me</h2>
        <p>
          DeAnna Martinez is a West Texas harpist with over 20 years of
          providing beautiful harp music for both grand and intimate
          celebrations including weddings, receptions, engagement parties,
          anniversaries, showers, birthdays, holidays, corporate events, social
          events, fundraisers, outdoor events, funerals and more... Music ranges
          from contemporary to classical and music by request. DeAnna will
          travel to your event! To add elegant harp music to your next occasion, {" "}
          <a href="/contact">click here</a>.
        </p>
        <img src={harp3} alt="harp3" />
      </div>
    );
  }
}
