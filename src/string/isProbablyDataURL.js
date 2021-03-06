
const REGEX = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)\s*$/gi;

/**
* Checks to see if a value is probably a valid data URL
* @param val - the value to check
* @returns true if val is probably a valid data URL
* @memberof Vet.String
*/
const isProbablyDataURL = (val) => {
	REGEX.lastIndex = 0;
	return REGEX.test(val);
};

module.exports = isProbablyDataURL;
