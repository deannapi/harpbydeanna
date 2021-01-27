var express = require("express");
var path = require("path");
const cors = require("cors");
var nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server up static assets
app.use(express.static(path.join(__dirname, "../client/public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.USER,
    // pass: process.env.PASS,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: process.env.OAUTH_ACCESS_TOKEN,
    expires: 3599,
  },
});

function sendMessage() {
  app.post("/contact", (req, res, next) => {
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
    } = req.body;
    console.log("it is working", name, email, req.body.number);

    try {
      // mail options
      const mailOptions = {
        from: email,
        to: process.env.USER, // Change to email address that you want to receive messages on
        subject: "Harp Gig Request",
        html: `<h1>req.body.name has sent a Harp Gig Request</h1>
            <p>Email: req.body.email Number: req.body.number</p>
            <p>${title} ${description}</p>
            <p>${date} From ${startTime} To ${endTime}</p>
            <p>Location: ${city}, ${state}</p>
            <p>Other details: ${details}</p>`,
      };

      // send email here
      transport.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log("Error: ", err);
        } else {
          console.log("Email sent successfully.");
        }
      });
    } catch (err) {
      console.log("There was an error sending the message: ", err);
    }
  });
}

sendMessage();

transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages.");
  }
});

app.get("*", (req, res) => {
  console.log(req.path);
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
