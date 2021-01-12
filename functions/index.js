const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: true,
});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.gmailPassword;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// app.use(cors());

exports.submit = functions.https.onRequest((req, res) => {
  let headers = new Headers();

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  headers.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  headers.append("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    res.end();
  } else {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `Harp Gig Request from: ${req.body.name}.`,
        text: req.body.title,
        html: `<p>
        Name: ${req.body.name} ${req.body.number}
        Title: ${req.body.title} & ${req.body.description}
        Date & Time: ${req.body.date} From ${req.body.startTime} To ${req.body.endTime}
        Location: ${req.body.city}, ${req.body.state}
        Other Details: ${req.body.details}
        </p>`,
      };

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log("New email sent to: ", gmailEmail);
        res.status(200).send({
          isEmailSend: true,
        });
        return;
      });
    });
  }
});
