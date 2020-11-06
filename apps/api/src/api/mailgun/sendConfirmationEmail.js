const { mg, baseMail } = require('./shared');

module.exports = (data) => {
  if (!mg) {
    return Promise.resolve();
  } else {
    return mg.messages().send({
      ...baseMail,
      to: data.email,
      subject: 'Gym Time Confirmation Email',
      text:
        'Thank you for signing up, please click this link to activate your membership! https://gymtime.com.au/activation/sjahdjh31k21ks',
      html:
        'Thank you for signing up, please click this link to activate your membership! <a href="https://gymtime.com.au/activation/sjahdjh31k21ks">Activation Link</a>',
    });
  }
};
