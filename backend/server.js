// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simulate Driver Data
let driverData = {
  speed: 0, // in km/h
  acceleration: 0, // in m/s²
  braking: false, // hard braking event
  fatigue: false, // fatigue detection
};

// Function to simulate data
function generateData() {
  driverData.speed = Math.floor(Math.random() * 122); // Random speed
  driverData.acceleration = Math.random() * 3; // Random acceleration
  driverData.braking = Math.random() > 0.8; // 20% chance of hard braking
  driverData.fatigue = Math.random() > 0.9; // 10% chance of fatigue
}

// API Endpoint to Get Simulated Data
app.get('/api/driverData', (req, res) => {
  const driverData = Array.from({ length: 10 }, (_, i) => ({
      time: i + 1,
      speed: Math.floor(Math.random() * 120), // Random speed between 0-120
  }));
  res.json(driverData);
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
