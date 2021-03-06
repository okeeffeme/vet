/* eslint-env mocha */

const optional = require('./optional');

const TESTS = [
	{ input: 'a string', expected: true },
	{ input: '', expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },

	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('Base.optional', () => {

	const validator = optional((val) => typeof val === 'string' || val instanceof String);

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
