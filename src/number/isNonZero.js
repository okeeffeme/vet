
const isNumber = require('./isNumber');

/**
* Checks to see if a value is a nonzero number
* @param val - the value to check
* @returns true if the value is a nonzero number
* @memberof Vet.Number
*/
const isNonZero = (val) => isNumber(val) && val !== 0;

module.exports = isNonZero;
