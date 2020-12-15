import React from "react";
import harp5 from "../images/Harp5.jpeg";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <h2>Get In Touch!</h2>

        <div className="contact">
          <label>Email:</label>
          <a href="mailto:deannapi.mart@gmail.com">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
            deannapi.mart@gmail.com
          </a>
          <br />
          <label>Phone:</label>
          <a href="tel:14324259101">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-telephone-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
              />
            </svg>
            (m) 432.425.9101
          </a>
        </div>

        <h5>Have all your event details? Fill out the form.</h5>
        <div className="contactform">
          <img src={harp5} alt="harp5" id="harp5" />
          <form>
            <label>First and Last Name:</label>
            <input type="text" name="Name" placeholder="Full Name"></input>
            <label>Your Email:</label>
            <input type="text" name="Email"></input>
            <label>Phone Number:</label>
            <input type="tel" name="Phone"></input>
            <label>Event Title:</label>
            <input
              type="text"
              name="Title"
              placeholder="Wedding, Birthday, Dinner..."
            ></input>
            <label>Description:</label>
            <input
              type="text"
              name="Description"
              placeholder="background music"
            ></input>
            <label>Event Date:</label>
            <input type="date" name="Date"></input>
            <label>Start Time:</label>
            <input type="time" name="StartTime"></input>
            <label>End Time:</label>
            <input type="time" name="EndTime"></input>
            <label>City:</label>
            <input type="text" name="City"></input>
            <label>State:</label>
            <input type="text" name="State"></input>
            <label>Other Details:</label>
            <textarea
              type="text"
              name="Other"
              placeholder="# of people, inside/outside, music requests"
              rows="6"
              cols="30"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
