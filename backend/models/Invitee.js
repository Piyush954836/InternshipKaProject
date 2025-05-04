const mongoose = require('mongoose');

const inviteeSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  field: String,
  aiGeneratedMessage: String,
  status: {
    type: String,
    enum: ['pending', 'sent'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Invitee', inviteeSchema);
