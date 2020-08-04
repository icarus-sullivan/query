// Derived from operators here https://docs.mongodb.com/manual/reference/operator/query/

module.exports = {
  ...require('./comparison'),
  ...require('./element'),
  ...require('./evaluation'),
};