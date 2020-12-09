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
            id="carouselExampleSlidesOnly"
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
            {/* CAROUSEL BUTTONS */}
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}
