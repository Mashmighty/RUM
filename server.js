const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Updated parking charges by town and car model
const charges = {
  nairobi: { audi: 200, volkswagen: 300, mercedes: 400 },
  mombasa: { audi: 150, volkswagen: 250, mercedes: 350 },
  kisumu: { audi: 100, volkswagen: 200, mercedes: 300 }
};

// Serve static files (e.g., index.html) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Parking charges API endpoint
app.get('/api/charges', (req, res) => {
  const { town, car } = req.query;

  if (!charges[town] || !charges[town][car]) {
    return res.status(400).json({ error: 'Invalid town or car model' });
  }

  const amount = charges[town][car];
  res.json({ amount });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚗 Parking Charges API is running at http://localhost:${PORT}`);
});
