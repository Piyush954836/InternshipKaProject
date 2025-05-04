const express = require('express');
const router = express.Router();
const Invitee = require('../models/Invitee');
const generateMessage = require('../utils/generateMessage');
const sendEmail = require('../utils/sendEmail');

router.post('/upload', async (req, res) => {
  try {
    const { invitees } = req.body;

    for (const data of invitees) {
      const msg = await generateMessage(data);
      const newInvitee = new Invitee({ ...data, aiGeneratedMessage: msg });
      await newInvitee.save();
      await sendEmail(data.email, msg);
    }

    res.status(200).json({ message: 'Invitations sent successfully!' });
  } catch (error) {
    console.error('Error in upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router