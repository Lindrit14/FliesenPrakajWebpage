const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  let { name, surname, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    // Transport configuration (like SMTP settings)
  });

  let mailOptions = {
    from: email, // sender address
    to: "lind12@gmail.com", // list of receivers
    subject: `Message from ${name} ${surname}`,
    text: message,
    // html: '<p>Your HTML here</p>' // You can use HTML content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });

  res.send("Email sent");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
