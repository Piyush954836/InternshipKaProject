const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(to, content) {
  const msg = {
    to,
    from: 'your@email.com', // Replace with your verified sender
    subject: 'Invitation to VBDA 2025 Conference',
    html: `<p>${content}</p>`
  };

  await sgMail.send(msg);
}

module.exports = sendEmail;