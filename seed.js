const mongoose = require('mongoose');
const Patient = require('./models/Patient');
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample patients data with address
const patients = [
  {
    name: 'John Doe',
    age: 45,
    address: '123 Elm Street, Springfield, IL',
    medicalHistory: 'Diabetes, Hypertension',
    treatmentPlan: 'Insulin therapy, ACE inhibitors',
  },
  {
    name: 'Jane Smith',
    age: 32,
    address: '456 Oak Avenue, Chicago, IL',
    medicalHistory: 'Asthma',
    treatmentPlan: 'Inhaled corticosteroids',
  },
  {
    name: 'Alice Johnson',
    age: 29,
    address: '789 Pine Street, Boston, MA',
    medicalHistory: 'Thyroid disorder',
    treatmentPlan: 'Levothyroxine',
  },
  {
    name: 'Robert Brown',
    age: 60,
    address: '321 Maple Drive, New York, NY',
    medicalHistory: 'Heart disease',
    treatmentPlan: 'Statins, Beta blockers',
  },
];

// Insert sample data into MongoDB
const seedDatabase = async () => {
  try {
    await Patient.deleteMany(); // Clear existing data
    await Patient.insertMany(patients);
    console.log('Sample data inserted successfully!');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
