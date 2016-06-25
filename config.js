"use strict";

var nconf = require("nconf");

nconf.file("config.json");

module.exports = {
  db: process.env.db || nconf.get("db"),
  from_email_address: process.env.from_email_address || nconf.get("from_email_address"),
  from_email_pw: process.env.from_email_pw || nconf.get("from_email_pw"),
  test_email_address: process.env.test_email_address || nconf.get("test_email_address"),
  test_filler_from_email_address: process.env.test_filler_from_email_address || nconf.get("test_filler_from_email_address"),
  portfolio_owner_name: process.env.portfolio_owner_name || nconf.get("portfolio_owner_name")
};
