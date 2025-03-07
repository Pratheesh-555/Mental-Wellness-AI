const express = require('express');
const router = express.Router();
const { analyzeImage } = require('../ai-models/facial-recognition');

router.post('/analyze-image', async (req, res) => {
  try {
    const { image } = req.body;
    const emotions = await analyzeImage(image);
    res.json({ emotions });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;