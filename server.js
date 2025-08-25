import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname with ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML
app.use(express.static(path.join(__dirname, 'public')));

// Example endpoint to trigger a GSAP animation (server sends HTML+JS)
app.get('/animate', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`GSAP MCP Server running on port ${PORT}`);
});
