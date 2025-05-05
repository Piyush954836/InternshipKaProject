const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const router = express.Router();
const Recipient = require('../models/Recipient');
const sendEmail = require('../utils/sendEmail');
const personalizeWithAI = require('../utils/personalizeWithAI');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('csvFile'), async (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        const recipient = await Recipient.create(row);
        const message = await personalizeWithAI(row);
        await sendEmail(row.email, "VBDA 2025 Invitation", message);
        recipient.status = "invited";
        recipient.emailSentAt = new Date();
        await recipient.save();
      }
      res.json({ message: "Invitations sent!" });
    });
});

module.exports = router;
