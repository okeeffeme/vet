
const isNumber = require('./isNumber');

/**
* Checks to see if a value is zero
* @param val - the value to check
* @returns true if the value is zero
* @memberof Vet.Number
*/
const isZero = (val) => isNumber(val) && val === 0;

module.exports = isZero;
