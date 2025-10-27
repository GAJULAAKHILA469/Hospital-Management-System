const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number
});

module.exports = mongoose.model("Doctor", doctorSchema);
