var mongoose = require("mongoose");

var emailSchema = mongoose.Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  ip: {type: String}
}, {timestamps: {createdAt: "createdAt"}});

module.exports = mongoose.model("Email", emailSchema);
