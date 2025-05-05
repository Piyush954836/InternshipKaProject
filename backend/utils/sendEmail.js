const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async function sendEmail(to, subject, text) {
  const msg = {
    to,
    from: 'your-email@domain.com',
    subject,
    text
  };
  await sgMail.send(msg);
};
