# Healthcare Authorization App

This application is a backend service for managing patients and their treatment authorizations. It uses Express.js, MongoDB, and Mongoose.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)


## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kaviraj121/backend.git
   cd backend

 
2. Install the dependencies:
   ```bash
   npm install

## Running the App
1. Set up your MongoDB database and get the connection string.
2. Create a .env file in the backend directory and add the following:
   ```bash
   MONGO_URI=your_mongodb_connection_string
3. Start the server:
   ```bash
   node server.js
4. The server will be running on http://localhost:5000.

## API Documentation 
### Base URL
    ```bash
    http://localhost:5000/api
1. Get All Patients
   + Endpoint: GET /patients
   + Response:
   ```
   [
     { "_id": "1",
       "name": "John",
       "age": 30,
       "address":
       "123 Street"
     }
   ]
   ```

2. Add a New Patient
   + Endpoint: POST /patients
   + Request Body:
     ```bash
     {
      "name": "Jane",
      "age": 25,
      "address": "456 Avenue"
     }
   + Response:
     ```bash
     { "_id": "2", "name": "Jane", "age": 25, "address": "456 Avenue" }

 3. Get All Authorizations
    + Endpoint: GET /authorizations
    + Response:
      ```bash
      [
        {
         "_id": "3",
         "patientId": { "_id": "1", "name": "John" },
         "treatment": "Physical Therapy",
         "doctorNotes": "Follow-up in 2 weeks",
         "status": "Pending"
         }
      ]

 4. Add a New Authorization
    + Endpoint: POST /authorizations
    + Request Body:
       ```bash
              {
                "patientId": "1",
                "treatment": "Physical Therapy",
                "doctorNotes": "Follow-up in 2 weeks"
                }
  + Response:
     ```bash
                {
            "_id": "4",
              "patientId": "1",
             "treatment": "Physical Therapy",
             "doctorNotes": "Follow-up in 2 weeks",
              "status": "Pending"
               }
 ## Environment Variables
  + MONGO_URI: MongoDB connection string.
   
    

   
