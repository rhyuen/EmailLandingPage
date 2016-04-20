var nodemailer = require("nodemailer");
var config = require("./config.js");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email_address,
    pass: config.email_pw
  }
}, {
  from: config.test_filler_from_email_address,
  headers: {
    "emailHeader": "12345"
  }
});
transporter.sendMail({
  from: config.test_filler_from_email_address,
  to: config.test_email_address,
  subject: "Thank you for  your interest in " + config.portfolio_owner_name,
  text: "I would just like to take a moment to thank you for your interest in my profile."
});
