

const $exists = (value) => (data) => (data !== null && data !== undefined) === value;

const $type = (value) => (v) => {
  return {}.toString.call(v).slice(8, -1) === value;
};

module.exports = {
  $exists,
  $type,
};