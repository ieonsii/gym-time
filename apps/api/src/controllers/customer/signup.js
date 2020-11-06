const Customer = require('../../models/Customer');
const h = require('../helpers');
const sendgrid = require('../../api/sendgrid');
const mailgun = require('../../api/mailgun');

const { sgMail } = require('../../api/sendgrid/shared');

module.exports = (req, res) => {
  const { name, email, password } = req.body;
  let _customer;

  const customer = new Customer({
    name: name,
    email: email,
    password: password,
  });

  customer
    .save()
    .then((customer) => {
      _customer = customer;
    })
    .then(() => h.successResponse(_customer, res))
    .then(() => {
      // check if sgMail is online if not use mailgun
      sgMail
        ? sendgrid.sendConfirmationEmail({
            email: _customer.email,
          })
        : mailgun.sendConfirmationEmail({
            email: _customer.email,
          });
    })
    .catch((err) => h.errorResponse(err, res));
};
