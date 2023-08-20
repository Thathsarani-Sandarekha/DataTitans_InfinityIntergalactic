const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a schema and model for your data
const bookingSchema = new mongoose.Schema({
  planetName: String,
  fromLocation: String,
  toLocation: String,
  tripDate: Date,
  returnDate: Date,
  passengers: String,
  selectedClass: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// Define your API endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the booking' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
