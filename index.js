// Minimal Express server to serve static files and a tiny health API
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from repo root (so home.html is accessible at /)
app.use(express.static(path.join(__dirname)));

// Simple JSON health endpoint
app.get('/api/health', (req, res) => {
	res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
