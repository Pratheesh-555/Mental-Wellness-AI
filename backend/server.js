const express = require('express');
const dialogflow = require('@google-cloud/dialogflow');
const { v4 } = require('uuid');
const path = require('path');

const app = express();
const port = 5000;

// Path to your service account JSON key
const CREDENTIALS = require('./keys/dialogflow-key.json');

// Set up Dialogflow client
const sessionClient = new dialogflow.SessionsClient({
  credentials: CREDENTIALS,
});

// Your Google Cloud Project ID (found in Cloud Console)
const projectId = 'mentalai-453010';

// Detect user intent
async function detectIntent(text, sessionId = v4()) {
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: 'en-US',
      },
    },
  };

  const [response] = await sessionClient.detectIntent(request);
  return response.queryResult.fulfillmentText;
}

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle user messages
app.post('/api/send-message', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const reply = await detectIntent(message);
    res.json({ result: reply });
  } catch (err) {
    console.error('Error detecting intent:', err);
    res.status(500).json({ error: 'Failed to process message.' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});