const mongoose = require("mongoose");

// Schema Definition
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

// Model creation
const User = mongoose.model("User", userSchema);

module.exports = User;
