import React from "react";
import axios from "axios";
// import { Form, Label, Header, Grid, Container } from "semantic-ui-react";
import harp5 from "../images/Harp5.jpeg";

export default class Contact extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const details = document.getElementById("details").value;

    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: {
        name: name,
        email: email,
        number: number,
        title: title,
        description: description,
        date: date,
        startTime: startTime,
        endTime: endTime,
        city: city,
        state: state,
        details: details,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <>
        {/* <Header as="h2">Get In Touch!</Header>
        <div className="contact">
          <Label className="contactLabel">Email:</Label>
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
          <Label className="contactLabel">Phone: </Label>
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
        </div> */}

        <div className="contactform container">
          <img src={harp5} id="harp5" alt="harp5" />
          <h5>Have all your event details? Complete the form.</h5>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            id="contact-form"
            method="POST"
          >
            <div className="row">
              <label>First & Last Name</label>
              <input
                placeholder="Full name"
                type="text"
                name="name"
                id="name"
              />
              <label>Email</label>
              <input type="email" name="email" id="email" />
              <label>Phone Number</label>
              <input type="tel" name="number" id="number" />
            </div>

            <div className="row">
              <label>Event Title</label>
              <input
                placeholder="Wedding, Birthday, Dinner..."
                type="text"
                name="title"
                id="title"
              />
              <label>Description</label>
              <input
                type="text"
                placeholder="background music"
                name="description"
                id="description"
              />
            </div>

            <div className="row">
              <label>Event Date</label>
              <input type="date" name="date" id="date" />
              <label>Start Time</label>
              <input type="time" name="startTime" id="startTime" />
              <label>End Time</label>
              <input type="time" name="endTime" id="endTime" />
            </div>

            <div className="row">
              <label>City</label>
              <input type="text" name="city" id="city" />
              <label>State</label>
              <input type="text" name="state" id="state" />
            </div>

            <div className="row">
              <label>Other Details</label>
              <textarea
                type="text"
                placeholder="# of people, inside/outside, music requests"
                name="details"
                id="details"
                rows="8"
                cols="30"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
