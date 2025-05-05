const express = require('express');
const router = express.Router();
const {
  uploadRecipients,
  generateEmail,
  sendEmail,
  getAnalytics,
  scheduleEmails,
} = require('../controllers/emailController');

router.post('/upload', uploadRecipients);
router.post('/generate-email', generateEmail);
router.post('/send-email', sendEmail);
router.get('/analytics', getAnalytics);
router.post('/schedule', scheduleEmails);

module.exports = router;
