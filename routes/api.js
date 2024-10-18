const express = require('express');
const Patient = require('../models/Patient');
const Authorization = require('../models/Authorization');
const router = express.Router();

// Fetch all patients
router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients' });
  }
});

// Fetch authorizations by patient ID
router.get('/authorizations', async (req, res) => {
  const { patientId } = req.query;
  try {
    const authorizations = await Authorization.find({ patientId });
    res.json(authorizations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching authorizations' });
  }
});

// Add a new authorization
router.post('/authorizations', async (req, res) => {
  try {
    const { patientId, treatment, doctorNotes, status } = req.body;
    const authorization = new Authorization({
      patientId,
      treatment,
      doctorNotes,
      status,
    });
    await authorization.save();
    res.status(201).json(authorization);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting authorization' });
  }
});

module.exports = router;
