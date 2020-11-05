const express = require('express');
const router = express.Router();

const customer = require('../controllers/customer');

router.post('/', customer.signup);

module.exports = router;
