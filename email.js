"use strict";

const nodemailer = require("nodemailer");
const config = require("./config.js");

module.exports = function(userEmailAddress){
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //Service EmailAddress
      user: config.from_email_address,
      //Service Password
      pass: config.from_email_pw
    }
  }, {
    //This from field seems to do nothing...
    from: "noreply@rhyuen.github.io",
    headers: {
      //You can see this in the email source headers
      "emailHeader": "Email Confirmation from Robert Yuen"
    }
  });

  let from_email_address = config.test_filler_from_email_address;
  let to_email_address = config.test_email_address;
  let emailText = "I would just like to take a moment to thank you for your interest in my profile.\nIf you have any need for my services, please don't hesitate to respond to this email. \n\nThanks very much for your time. \n" + config.portfolio_owner_name;
  let emailHeading = `Thank you for  your interest in ${config.portfolio_owner_name}`;

  transporter.sendMail({
    //You only see your name and not the email address if the below string is long enough.
    from: config.test_filler_from_email_address,
    to: to_email_address,
    subject: emailHeading,
    text: emailText
  }, (err, info) => {
    if(err)
      return console.log(err);
    console.log(
      "[%s] The email has been sent.\nDetails: %s",
      new Date().toLocaleString(),
      info.response
    );
  });
};
