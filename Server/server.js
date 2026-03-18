require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const app = express();

// ✅ Allow frontend domain
app.use(cors({
  origin: [
    "https://ishisofttech.com",
    "https://www.ishisofttech.com"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// 📩 Function to send email
function sendMail(name, email, phone, msg) {
  console.log("📧 Sending email from:", process.env.EMAILID);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAILID,
      pass: process.env.PASSWORD
    }
  });

  const subject = "Services By Ishisoft Private Limited";
  const to = process.env.EMAILID;
  const from = process.env.EMAILID; // ✅ Must be your Gmail
  const replyTo = email; // ✅ So you can reply to the user

  // Load Handlebars template
  const templatePath = path.join(__dirname, process.env.TEMPLATE_PATH);
  const template = handlebars.compile(fs.readFileSync(templatePath, 'utf-8'));
  const html = template({ name, email, phone, msg });

  const mailOptions = { from, to, replyTo, subject, html };

  return transporter.sendMail(mailOptions);
}

// ✅ Contact API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, msg } = req.body;

  try {
    await sendMail(name, email, phone, msg);
    res.json({ success: true, message: "Your message was sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
