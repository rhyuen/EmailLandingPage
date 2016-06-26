var nodemailer = require("nodemailer");
var config = require("./config.js");


module.exports = function(userEmailAddress){
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //Service EmailAddress
      user: config.from_email_address,
      //Service Password
      pass: config.from_email_pw
    }
  }, {
    //This from field seems to do nothing...
    from: "Nothing Doing",
    headers: {
      //You can see this in the email source headers
      "emailHeader": "Email Confirmation from Robert Yuen"
    }
  });
  transporter.sendMail({
    //You only see your name and not the email address if the below string is long enough.
    from: config.test_filler_from_email_address,
    //Taken from the User entered form
    to: userEmailAddress,
    subject: "Thank you for  your interest in " + config.portfolio_owner_name,
    text: "I would just like to take a moment to thank you for your interest in my profile.\nIf you have any need for my services, please don't hesitate to respond to this email. \n\nThanks very much for your time. \n" + config.portfolio_owner_name
  }, function(err, info){
    if(err)
      return console.log(err);
    console.log("The email has been sent.\nDetails: %s", info.response);
  });
};
