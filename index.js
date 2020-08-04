const op = require('./operators');

const get = require('./utils/get');

const DEFAULT_OPERATOR = op.$eq;
const IS_OBJECT = op.$type('Object');

const filter = (lookup) => (d) => {
  for (const [k, op] of lookup) {
    // If we have don't have a match, use get (slower)
    const v = d[k] || get(d, k);

    // One of more of the ops failed, ignore
    if (!op(v)) {
      return false;
    }
  }
  return true;
};

module.exports = (s, q) => {
  const lookup = [];
  for (const k in q) {
    const v = q[k];

    // If we have an internal object that contains ops, iterate through each one
    if (IS_OBJECT(v)) {
      for (const ek in v) {
        lookup.push([
          k, 
          op[ek](v[ek]) 
        ]);
      }
      continue;
    } 
    
    // Use default lookup
    lookup.push([
      k, 
      DEFAULT_OPERATOR(v)
    ]);
  }

  const curryFilter = filter(lookup);
  return IS_OBJECT(s) ? curryFilter(s) : s.filter(curryFilter);
};
