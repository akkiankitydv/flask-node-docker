const express = require('express');
const fetch = require('node-fetch');
const API_BASE = "http://56.228.17.178:7860";
// If you're using Node <18

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express Frontend</h1><p>Go to /data to fetch API</p>');
});

app.get('/data', async (req, res) => {
  try {
    const response = await fetch('http://backend:7860/api');
    const data = await response.json();
    res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
  } catch (err) {
    res.status(500).send('Error fetching from Flask backend.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Frontend running at http://localhost:${PORT}`);
});
