const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    availability: {
      days: { type: [String], default: [] }, // Array of available days
      slots: { type: [String], default: [] }, // Array of time slots
    },
  });
  
  const Doctor = mongoose.model("Doctor", doctorSchema,"Doctors");
  module.exports = Doctor;