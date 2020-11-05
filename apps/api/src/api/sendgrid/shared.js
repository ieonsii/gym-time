const sgMail = require('@sendgrid/mail');

// initialise sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// set from email
const baseMail = {
  from: {
    email: process.env.SENDGRID_FROM_ADDRESS,
    name: process.env.SENDGRID_FROM_NAME,
  },
};

module.exports = { sgMail, baseMail };
