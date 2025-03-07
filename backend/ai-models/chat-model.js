const dialogflow = require("dialogflow");
const path = require("path");
require("dotenv").config();

// Load the Dialogflow service account key
const CREDENTIALS = require(path.join(__dirname, "../config/dialogflow-key.json"));

const projectId = CREDENTIALS.project_id; // Get project ID from key
const sessionClient = new dialogflow.SessionsClient({ credentials: CREDENTIALS });

const detectIntent = async (message, sessionId = "12345") => {
  try {
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: "en",
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    return responses[0].queryResult.fulfillmentText || "Sorry, I didn't understand that.";
  } catch (error) {
    console.error("Dialogflow API Error:", error);
    return "Error processing your request.";
  }
};

module.exports = { detectIntent };
