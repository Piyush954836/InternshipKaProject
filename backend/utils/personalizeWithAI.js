const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // make sure this is in your .env file
});

async function personalizeInvitation(userData) {
  const prompt = `Generate a personalized invitation for ${userData.name}, a ${userData.role}, interested in ${userData.interests.join(", ")}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
}

module.exports = personalizeInvitation;
