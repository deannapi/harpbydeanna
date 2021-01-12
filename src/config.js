import env from 'react-dotenv';
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");

nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: env.USER,
    pass: env.PASS
  },
  debug: true,
  logger: true
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var title = req.body.title;
  var number = req.body.number;
  var description = req.body.description;
  var date = req.body.date;
  var startTime = req.body.startTime;
  var endTime = req.body.endTime;
  var city = req.body.city;
  var state = req.body.state;
  var details = req.body.details;
  var content = `name: ${name} \n email: ${email} \n title: ${title} \n  number: ${number} description: ${description} \n date: ${date} \n StartTime: ${startTime} EndTime: ${endTime} \n Location: ${city}, ${state} \n Details: ${details}`;

  var mail = {
    from: email,
    to: env.USER, // Change to email address that you want to receive messages on
    subject: "Harp Gig Request",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.route("/", router);
app.listen(3000);