import React, { useState } from "react";
import { Axios, db } from "../firebase/firebaseConfig";
import { Form, Label, Header, Grid } from "semantic-ui-react";
import harp5 from "../images/Harp5.jpeg";

 const Contact = () => {
  // render() {
    const [formData, setFormData] = useState({});

    const updateInput = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      sendEmail();
      setFormData({
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
    };

    const sendEmail = () => {
      Axios.post(
        "https://us-central1-harpbydeanna.cloudfunctions.net/submit",
        formData
      )
        .then((res) => {
          db.collection("emails").add({
            name: formData.name,
            email: formData.email,
            number: formData.number,
            title: formData.title,
            description: formData.description,
            date: formData.date,
            startTime: formData.startTime,
            endTime: formData.endTime,
            city: formData.city,
            state: formData.state,
            details: formData.details,
            time: new Date(),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
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
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Form.Input
                      label="First & Last Name"
                      placeholder="Full name"
                      type="text"
                      name="name"
                      onChange={updateInput}
                      value={formData.name || ""}
                    />

                    <Form.Input
                      label="Email"
                      type="email"
                      name="email"
                      onChange={updateInput}
                      value={formData.email || ""}
                    />
                    <Form.Input
                      label="Phone Number"
                      type="tel"
                      name="number"
                      onChange={updateInput}
                      value={formData.number || ""}
                    />
                    <Form.Input
                      label="Event Title"
                      placeholder="Wedding, Birthday, Dinner..."
                      type="text"
                      name="title"
                      onChange={updateInput}
                      value={formData.title || ""}
                    />
                    <Form.Input
                      label="Description"
                      type="text"
                      placeholder="background music"
                      name="description"
                      onChange={updateInput}
                      value={formData.description || ""}
                    />
                    <Form.Input
                      label="Event Date"
                      type="date"
                      name="date"
                      onChange={updateInput}
                      value={formData.date || ""}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Input
                      label="Start Time"
                      type="time"
                      name="startTime"
                      onChange={updateInput}
                      value={formData.startTime || ""}
                    />
                    <Form.Input
                      label="End Time"
                      type="time"
                      name="endTime"
                      onChange={updateInput}
                      value={formData.endTime || ""}
                    />
                    <Form.Input
                      label="City"
                      type="text"
                      name="city"
                      onChange={updateInput}
                      value={formData.city || ""}
                    />
                    <Form.Input
                      label="State"
                      type="text"
                      onChange={updateInput}
                      value={formData.state || ""}
                    />
                    <Label>Other Details</Label>
                    <Form.TextArea
                      type="text"
                      placeholder="# of people, inside/outside, music requests"
                      name="details"
                      onChange={updateInput}
                      value={formData.details || ""}
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
  // }
}

export default Contact