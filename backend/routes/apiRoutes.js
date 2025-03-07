// backend/routes/apiRoutes.js
const express = require('express');
const { limitedGenerateResponse } = require('../ai-models/stressAnalysis');

const router = express.Router();

// POST route for stress analysis
router.post('/analyze-stress', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text input is required.' });
  }

  try {
    const result = await limitedGenerateResponse(text);
    res.json({ result });
  } catch (err) {
    console.error('Error in stress analysis:', err);
    res.status(500).json({ error: 'Failed to analyze stress level.' });
  }
});

module.exports = router;