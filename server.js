const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});