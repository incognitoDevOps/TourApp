const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { accommodationName, accommodationLocation, userName, userEmail, userPhone } = req.body;

  // Create a transporter with Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'brianadem2@gmail.com',
      pass: '39714124059',
    },
  });

  // Define email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'admin-email@gmail.com', // Replace with the admin's email address
    subject: 'New Booking Request',
    text: `New booking request details:\n\nAccommodation Name: ${accommodationName}\nAccommodation Location: ${accommodationLocation}\nUser Name: ${userName}\nUser Email: ${userEmail}\nUser Phone: ${userPhone}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
