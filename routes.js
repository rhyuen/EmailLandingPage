"use strict";

const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const validator = require("validator");
const Email = require("./models/email.js");
const config = require("./config.js");

router.get("/", (req, res) => {
  res.status(200).render("index");
});

router.post("/", (req, res) => {
  var formContent = new Email({
    email: validator.escape(req.body.email),
    name: validator.escape(req.body.name),
    hostname: validator.escape(req.hostname),
    ip: validator.escape(req.ip)
  });

  require("./email.js")(formContent.email);

  formContent.save(function(err, data){
    if(err)
      return console.error(err);
    console.log("[%s] Email entry added:  %s", new Date().toLocaleString(), data);
    res.render("confirm", {
      confirm_email: validator.escape(req.body.email),
      confirm_name: validator.escape(req.body.name)
    });
  });
});

router.get("/*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
