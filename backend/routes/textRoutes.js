const express = require('express');
const router = express.Router();
const { analyzeText } = require('../ai-models/sentiment-analysis');
const { generateResponse } = require('../ai-models/chat-model'); // Add chat model

// POST /api/text/analyze-text
router.post('/analyze-text', async (req, res) => {
  try {
    const { text } = req.body;
    const sentiment = await analyzeText(text);
    res.json({ sentiment });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/text/chat
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await generateResponse(message); // Use chat model
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;