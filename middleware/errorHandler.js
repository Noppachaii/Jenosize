const { errorResponse } = require('../utils/response');

module.exports = (err, req, res, next) => {
  console.error('Error:', err);
  const message = err.message || 'Internal Server Error';
  const status = err.status || 500;
  return errorResponse(res, message, status);
};
