 
const OPENING_BRACKET = /\[/g;
const CLOSING_BRACKET = /\]/g;
const BEGINS_WITH_DOT = /^\./g;

const parse = (dot) =>
  dot
    .replace(OPENING_BRACKET, '.')
    .replace(CLOSING_BRACKET, '')
    .replace(BEGINS_WITH_DOT, '')
    .split('.');

module.exports = (src, dot) => {
  try {
    return parse(dot).reduce((a, key) => a[key], src);
  } catch (e) {
    return undefined;
  }
}
