/* eslint-env mocha */

const assert = require('./assert');

const isString = require('src/string/isString');

const TESTS = [
	{ input: undefined, expected: true },
	{ input: null, expected: true },
	{ input: 0, expected: true },
	{ input: false, expected: true },
	{ input: true, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
];

describe('Utils.assert', () => {

	const threwError = (validator) => (...args) => {
		try {
			validator(...args);
			return false;
		} catch (e) {
			return true;
		}
	}

	const validator = threwError(assert(isString))

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
