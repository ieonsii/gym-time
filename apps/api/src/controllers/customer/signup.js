const Customer = require('../../models/Customer');
const h = require('../helpers');

module.exports = (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const customer = new Customer({
    name: name,
    email: email,
    password: password,
  });

  customer
    .save()
    .then((customer) => h.successResponse(customer, res))
    .catch((err) => h.errorResponse(err, res));
};
