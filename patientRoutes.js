
const express = require("express");
const Patient = require("../models/patientModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.render("patients", { patients });
});

router.post("/add", async (req, res) => {
  const { name, age, disease, phone } = req.body;
  await Patient.create({ name, age, disease, phone });
  res.redirect("/patients");
});

module.exports = router;
