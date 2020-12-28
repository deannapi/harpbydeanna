import React from "react";
import { Form, Label, Header, Grid } from "semantic-ui-react";
import harp5 from "../images/Harp5.jpeg";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const {
      name,
      email,
      number,
      title,
      description,
      date,
      startTime,
      endTime,
      city,
      state,
      details,
    } = this.state;

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
    console.log(
      name,
      email,
      number,
      title,
      description,
      date,
      startTime,
      endTime,
      city,
      state,
      details
    );
  };

  render() {
    const {
      name,
      email,
      number,
      title,
      description,
      date,
      startTime,
      endTime,
      city,
      state,
      details,
    } = this.state;
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Form.Input
                      label="First & Last Name"
                      placeholder="Full name"
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      value={name}
                    />

                    <Form.Input
                      label="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      label="Phone Number"
                      type="tel"
                      name="number"
                      value={number}
                    />
                    <Form.Input
                      label="Event Title"
                      placeholder="Wedding, Birthday, Dinner..."
                      type="text"
                      name="title"
                      value={title}
                    />
                    <Form.Input
                      label="Description"
                      type="text"
                      placeholder="background music"
                      value={description}
                    />
                    <Form.Input label="Event Date" type="date" value={date} />
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Input
                      label="Start Time"
                      type="time"
                      value={startTime}
                    />
                    <Form.Input label="End Time" type="time" value={endTime} />
                    <Form.Input label="City" type="text" value={city} />
                    <Form.Input label="State" type="text" value={state} />
                    <Label>Other Details</Label>
                    <Form.TextArea
                      // label="Other Details"
                      type="text"
                      placeholder="# of people, inside/outside, music requests"
                      value={details}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </>
    );
  }
}
