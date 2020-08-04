
const $regex = (value) => (data) => value.test(data);

const $mod = ([divisor, remainder]) => (data) => data % divisor === remainder;

module.exports = {
  $regex,
  $mod,
};
