const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {
    return +n;
  }
  else {
    let str = n.toString().split('');
    let arr = [];
    for (let j = 0; j < str.length; j++) {
      arr.push(+str[j]);
    }
    let res = +arr.reduce((a, b) => a + b);
    return getSumOfDigits(res)
  }
}

getSumOfDigits(19)

module.exports = {
  getSumOfDigits
};

