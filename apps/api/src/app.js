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

module.exports = app;
