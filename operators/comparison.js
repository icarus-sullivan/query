
const $eq = (value) => (data) => JSON.stringify(data) === JSON.stringify(value);

const $ne = (value) => (data) => JSON.stringify(data) !== JSON.stringify(value);

const $gt = (value) => (data) => data > value;

const $gte = (value) => (data) => data >= value;

const $lt = (value) => (data) => data < value;

const $lte = (value) => (data) => data <= value;

const $in = (value) => (data) => value.reduce((a, b) => a || data.indexOf(b) !== -1, false);

const $nin = (value) => (data) => !$in(value)(data);

module.exports = {
  $eq,
  $ne,
  $gt,
  $gte,
  $lt,
  $lte,
  $in,
  $nin,
};
