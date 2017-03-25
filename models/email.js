var mongoose = require("mongoose");

var emailSchema = mongoose.Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  hostname: {type: String},
  ip: {type: String}
}, {timestamps: {createdAt: "createdAt"}});

module.exports = mongoose.model("Email", emailSchema);
