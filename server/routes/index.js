var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
require("dotenv").config();
// const creds = require("../config/config");

var transport = {
  service: "gmail",
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  auth: {
    // type: "OAuth2",
    xoauth2: xoauth2.createXOAuth2Generator({
      user: process.env.USER,
      // pass: process.env.PASS,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
      // expires: 3599,
    }),
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages.");
  }
});

router.post("/send", (req, res, next) => {
  // var name = req.body.name;
  // var email = req.body.email;
  // var title = req.body.title;
  // var number = req.body.number;
  // var description = req.body.description;
  // var date = req.body.date;
  // var startTime = req.body.startTime;
  // var endTime = req.body.endTime;
  // var city = req.body.city;
  // var state = req.body.state;
  // var details = req.body.details;
  // var content = `name: ${name} \n email: ${email} \n title: ${title} \n  number: ${number} description: ${description} \n date: ${date} \n StartTime: ${startTime} EndTime: ${endTime} \n Location: ${city}, ${state} \n Details: ${details}`;

  const mailOptions = {
    from: email,
    to: process.env.USER, // Change to email address that you want to receive messages on
    subject: "Harp Gig Request",
    html: `<h1>${name} has sent a Harp Gig Request</h1>
          <p>${email} ${number}</p>
          <p>${title} ${description}</p>
          <p>${date} From ${startTime} To ${endTime}</p>
          <p>Location: ${city}, ${state}</p>
          <p>Other details: ${details}</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Email sent successfully.");
    }
  });
});

module.exports = router;
