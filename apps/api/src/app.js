const express = require('express');
const app = express();

/**
 * CONFIGS
 */

// use helmet for setting HTTP headers
const helmet = require('helmet');
app.use(helmet());

// use compression for performance optimisation
const compression = require('compression');
app.use(compression());

// use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));

// use morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// config cors
const cors = require('cors');
const allowedCors = ['http://localhost:3000'];
app.use(cors({ origin: allowedCors }));

/**
 * ROUTES
 */
const routes = require('./routes');

/**
 * ROUTES
 */
app.get('/', (req, res) => res.send(''));
app.use('/customers', routes.customer);

/**
 * test sendgrid
 */

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'leonsio192@gmail.com', // Change to your recipient
//   from: 'leonsio192@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const sendgrid = require('./api/sendgrid');

sendgrid.sendConfirmationEmail({ email: 'leonsio192@gmail.com' });

module.exports = app;
