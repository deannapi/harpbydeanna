import React from "react";
import axios from "axios";
import { Form, Label, Header, Grid } from "semantic-ui-react";
import harp5 from "../images/Harp5.jpeg";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      city: "",
      state: "",
      details: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("Form Details: ", this.state);

    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      number: "",
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      city: "",
      state: "",
      details: "",
    });
  }

  render() {
    return (
      <>
        <Header as="h2">Get In Touch!</Header>
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
        </div>

        <div className="contactform">
          <img src={harp5} id="harp5" alt="harp5" />
          <Header as="h5">
            Have all your event details? Fill out the form.
          </Header>
          <Form
            onSubmit={this.handleSubmit.bind(this)}
            id="contact-form"
            method="POST"
          >
            <Form.Group>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Form.Input
                      label="First & Last Name"
                      placeholder="Full name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                    />

                    <Form.Input
                      label="Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                    <Form.Input
                      label="Phone Number"
                      type="tel"
                      name="number"
                      value={this.state.number}
                      onChange={this.onNumberChange.bind(this)}
                    />
                    <Form.Input
                      label="Event Title"
                      placeholder="Wedding, Birthday, Dinner..."
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.onTitleChange.bind(this)}
                    />
                    <Form.Input
                      label="Description"
                      type="text"
                      placeholder="background music"
                      name="description"
                      value={this.state.description}
                      onChange={this.onDescChange.bind(this)}
                    />
                    <Form.Input
                      label="Event Date"
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.onDateChange.bind(this)}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Input
                      label="Start Time"
                      type="time"
                      name="startTime"
                      value={this.state.startTime}
                      onChange={this.onStartTimeChange.bind(this)}
                    />
                    <Form.Input
                      label="End Time"
                      type="time"
                      name="endTime"
                      value={this.state.endTime}
                      onChange={this.onEndTimeChange.bind(this)}
                    />
                    <Form.Input
                      label="City"
                      type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.onCityChange.bind(this)}
                    />
                    <Form.Input
                      label="State"
                      type="text"
                      name="state"
                      value={this.state.state}
                      onChange={this.onStateChange.bind(this)}
                    />
                    <Label>Other Details</Label>
                    <Form.TextArea
                      type="text"
                      placeholder="# of people, inside/outside, music requests"
                      name="details"
                      value={this.state.details}
                      onChange={this.onDetailsChange.bind(this)}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Group>
            <Form.Button type="submit">Submit</Form.Button>
          </Form>
        </div>
      </>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onDescChange(event) {
    this.setState({ description: event.target.value });
  }

  onDateChange(event) {
    this.setState({ date: event.target.value });
  }

  onStartTimeChange(event) {
    this.setState({ startTime: event.target.value });
  }

  onEndTimeChange(event) {
    this.setState({ endTime: event.target.value });
  }

  onCityChange(event) {
    this.setState({ city: event.target.value });
  }

  onStateChange(event) {
    this.setState({ state: event.target.value });
  }

  onDetailsChange(event) {
    this.setState({ details: event.target.value });
  }
}
