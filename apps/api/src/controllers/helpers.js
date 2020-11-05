module.exports.successResponse = (payload, res) => {
  res.json({
    success: true,
    payload,
  });
};

module.exports.errorResponse = (err, res) => {
  console.log(err);

  const message = err.message ? err.message : err;

  res.status(400).json({
    success: false,
    message,
  });
};
