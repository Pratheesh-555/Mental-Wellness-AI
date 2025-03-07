const express = require("express");
const { detectIntent } = require("../ai-models/chat-model");

const router = express.Router();

// Use "/" instead of "/chat" because the route is mounted at "/api/chat"
router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await detectIntent(message);
    res.json({ reply: response });
  } catch (error) {
    console.error("Error in chat route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
