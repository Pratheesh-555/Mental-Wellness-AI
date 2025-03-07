// backend/ai-models/stressAnalysis.js
const OpenAI = require('openai');


// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Load API key from .env
});

// Function to analyze text and detect stress
const generateResponse = async (text) => {
  try {
    const prompt = `Analyze the following text and determine the stress level of the user (low, medium, high):\n\n"${text}"\n\nStress Level:`;
    
    const response = await openai.completions.create({
      model: 'text-davinci-003', // Consider using 'gpt-3.5-turbo' or 'gpt-4'
      prompt: prompt,
      max_tokens: 50, // Adjust as needed
      temperature: 0.7, // Adjust for creativity vs accuracy
    });

    // Extract the stress level from the response
    const stressLevel = response.choices[0].text.trim().toLowerCase();
    
    // Validate the stress level
    const validStressLevels = ['low', 'medium', 'high'];
    if (!validStressLevels.includes(stressLevel)) {
      return 'Sorry, I could not accurately determine your stress level.';
    }

    return `Your stress level is: ${stressLevel}`;
  } catch (err) {
    console.error('Error calling OpenAI API:', err);
    return 'Sorry, I could not analyze your stress level.';
  }
};

module.exports = { generateResponse };