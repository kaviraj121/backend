const mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  treatment: String,
  doctorNotes: String,
  status: { type: String, default: 'pending' },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Authorization', authorizationSchema);
