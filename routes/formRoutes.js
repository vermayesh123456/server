// routes/formRoutes.js

const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// POST route to handle form submissions
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const form = new Form({ name, email, message });
    await form.save();
    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Error saving form data" });
  }
});

module.exports = router;
