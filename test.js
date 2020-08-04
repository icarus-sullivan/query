const q = require('.');

const src = Array(100).fill('').map((a, i) => ({
  id: i + 1,
  email: `${i + 1}_email@jmail.com`,
  first_name: `${i + 1}_fname`,
  siblings: [i - 1, i, i + 1],
  internal: {
    object: {
      has: `value_${i}`
    }
  },
}));

const query = { siblings: { $in: [2] }, id: { $eq: 3 } };

console.time('f');
console.log(q(src, query));
console.timeEnd('f');


console.time('g');
console.log(q(src, { email: { $regex: /82_email/ } }));
console.timeEnd('g');


console.time('eq');
console.log(q(src, { 'internal.object.has': 'value_13' }));
console.timeEnd('eq');

console.time('m');
console.log(q(src, { id: { $lt: 10, $gt: 2 } }));
console.timeEnd('m');

