var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose");
var Email = require("./models/email.js");
var config = require("./config.js");

router.get("/", function(req, res){
  res.render("index");
  console.log(req.hostname);
  console.log(req.ip);
});

router.post("/", function(req, res){
  mongoose.connect(config.db, function(err){
    if(err)
      console.error(err);
    console.log("Db conn attempted.");

    //console.log("%s, %s, %s", req.body.email, req.body.name, req.ip);


    var formContent = new Email({
      email: req.body.email,
      name: req.body.name,
      ip: req.ip
    });

    //Test for DB Error Gaffes.  And put up a fail whale message.

    require("./email.js")(req.body.email);

    formContent.save(function(err, data){
      if(err)
        console.error(err);
      console.log("Email entry added:  %s", data);
      res.render("confirm", {confirm_email: req.body.email, confirm_name: req.body.name});
      mongoose.disconnect(function(){
        console.log("Connection closed.");
      });
    });
  });
});

router.get("/*", function(req, res){
  res.redirect("/");
});

module.exports = router;
