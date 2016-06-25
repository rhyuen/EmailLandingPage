var nodemailer = require("nodemailer");
var config = require("./config.js");


module.exports = function(userEmailAddress){
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.from_email_address,
      pass: config.from_email_pw
    }
  }, {
    from: config.test_filler_from_email_address,
    headers: {
      "emailHeader": "Email Header from NodeJSMail"
    }
  });
  transporter.sendMail({
    from: config.test_filler_from_email_address,
    to: config.test_email_address,
    subject: "Thank you for  your interest in " + config.portfolio_owner_name,
    text: "I would just like to take a moment to thank you for your interest in my profile.\nIf you have any need for my services, please don't hesitate to respond to this email. \n\nThanks very much for your time. \n" + config.portfolio_owner_name
  }, function(err, info){
    if(err)
      return console.log(err);
    console.log("The email has been sent.\nDetails: %s", info.response);
  });
};
