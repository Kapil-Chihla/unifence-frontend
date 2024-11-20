// routes/contact.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message, firstName, lastName, phone } = req.body;

  // Determine the form data structure and validate accordingly
  if (name && subject) {
    // Original form structure
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  } else {
    // New form structure
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  }

  // Configure the email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  // Prepare the subject and message content based on the form data
  const formSubject = subject || 'Contact Form Submission';
  const formName = name || `${firstName} ${lastName}`;
  const formMessage = message;

  // Email options with HTML formatting
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `${formSubject}: ${formName}`,
    html: `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <h3>Message:</h3>
          <p>${formMessage}</p>
        </body>
      </html>
    `,
    replyTo: email, 
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message, please try again later.' });
  }
});

module.exports = router;
