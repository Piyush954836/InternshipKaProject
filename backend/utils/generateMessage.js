require('dotenv').config();
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateMessage(invitee) {
  const prompt = `Write an official invitation for ${invitee.name}, working in ${invitee.field} at ${invitee.organization}, for the VBDA 2025 conference.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });

  return response.choices[0].message.content;
}

module.exports = generateMessage;
