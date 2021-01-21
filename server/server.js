var express = require("express");
var path = require("path");
const cors = require("cors");
var router = express.Router();
var nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;
var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server up static assets
app.use(express.static(path.join(__dirname, "../client/public")));

if (process.eventNames.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.hmtl"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
})

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

var transport = {
  service: "gmail",
  host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  auth: {
    // type: "OAuth2",
    // xoauth2: xoauth2.createXOAuth2Generator({
    user: process.env.USER,
    pass: process.env.PASS,
    // pass: process.env.PASS,
    // clientId: process.env.OAUTH_CLIENT_ID,
    // clientSecret: process.env.OAUTH_CLIENT_SECRET,
    // refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    // accessToken: process.env.OAUTH_ACCESS_TOKEN,
    // expires: 3599,
  },
  // ),
  // },
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

module.exports = app;
