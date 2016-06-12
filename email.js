var nodemailer = require("nodemailer");
var nconf = require("./nconf.js");



module.exports = function(userEmailAddress){
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: nconf.get("from_email_address"),
      pass: nconf.get("from_email_pw")
    }
  }, {
    from: nconf.get("test_filler_from_email_address"),
    headers: {
      "emailHeader": "Email Header from NodeJSMail"
    }
  });
  transporter.sendMail({
    from: nconf.get("test_filler_from_email_address"),
    to: nconf.get("test_email_address"),
    subject: "Thank you for  your interest in " + nconf.get("portfolio_owner_name"),
    text: "I would just like to take a moment to thank you for your interest in my profile."
  }, function(err, info){
    if(err)
      return console.log(err);
    console.log("The email has been sent.\nDetails: %s", info.response);
  });
};
