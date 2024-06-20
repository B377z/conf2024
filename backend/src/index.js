// Import required modules
const express = require('express');  // Import the Express library
const bodyParser = require('body-parser');  // Import body-parser for parsing request bodies

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Conference Application Backend!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
