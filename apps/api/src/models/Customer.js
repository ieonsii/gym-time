const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('customer', Customer);
