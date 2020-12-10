import React from "react";
import deanna_favicon from "../images/favicon-32x32.png";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <h4>Harp By DeAnna</h4>
          <div className="row">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/deanna-martinez-63539a137/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.deannapi.com">
                  <img src={deanna_favicon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}
