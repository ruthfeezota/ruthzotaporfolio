const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001; // Use an environment variable for PORT

// Serve static files from the 'build' folder (created after build)
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});