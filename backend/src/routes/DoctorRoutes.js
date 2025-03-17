const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctors"); // Import the Doctor model

// Get all doctors
router.get("/viewdoctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error: error.message });
  }
});

// Add a new doctor
router.post("/add", async (req, res) => {
  try {
    const { name, specialization, email, phone, availability } = req.body;
    const newDoctor = new Doctor({
      name,
      specialization,
      email,
      phone,
      availability,
    });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: "Error adding doctor", error: error.message });
  }
});

module.exports = router;
