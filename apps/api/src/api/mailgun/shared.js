const mailgun = require('mailgun-js');

// initialise mailgun

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

// set from email
const baseMail = {
  from: process.env.MAILGUN_FROM_ADDRESS,
};

module.exports = { mg, baseMail };
