import React from "react";
import harp4 from "../images/Harp4.jpeg";
import harp2 from "../images/Harp2.jpeg";
import Harp1 from "../images/Harp1gray.jpeg";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          {/* CAROUSEL */}
          <div
            id="carouselSlides"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="home-carousel-img" src={harp4} alt="harp" />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={harp2} alt="harp2" />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={Harp1} alt="harp3" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
