const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  organization: String,
  achievement: String,
  role: String,
  status: { type: String, default: 'pending' }, // pending, invited, responded
  emailSentAt: Date,
  rsvp: Boolean
});

module.exports = mongoose.model('Recipient', recipientSchema);
