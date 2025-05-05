const Recipient = require('../models/Recipient');
const openai = require('../config/openai');
const transporter = require('../config/transporter');

// Upload recipients
exports.uploadRecipients = async (req, res) => {
  try {
    await Recipient.insertMany(req.body);
    res.status(200).send('Recipients added.');
  } catch (err) {
    res.status(500).send('Upload failed.');
  }
};

// Generate personalized email content
exports.generateEmail = async (req, res) => {
  const { firstName, achievement, role } = req.body;
  try {
    const prompt = `Write a formal email inviting ${firstName}, a ${role}, to a tech event in recognition of this achievement: ${achievement}. Keep it under 150 words.`;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful email assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 150,
    });
    
    res.json({ emailContent: response.choices[0].message.content.trim() });
  } catch (err) {
    res.status(500).send('AI email generation failed.');
  }
};

// Send actual email
exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent.');
  } catch (err) {
    res.status(500).send('Sending failed.');
  }
};

// Analytics endpoint
exports.getAnalytics = async (req, res) => {
  try {
    const data = await Recipient.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Analytics fetch failed.' });
  }
};

// Scheduler mock endpoint
exports.scheduleEmails = async (req, res) => {
  const { date } = req.body;
  console.log('Scheduled for:', date);
  res.status(200).send(`Emails scheduled for ${date}`);
};
