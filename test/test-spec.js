/* eslint-env node, mocha */

const Chai = require('chai');
const expect = Chai.expect;
const cal = require('../app.js');

describe('calculator should work', function() {
	it('should add two numbers together', function() {
		expect(cal.add(2,3)).to.be.equal(5);
	});

	it('should subtract two numbers together', function() {
		expect(cal.subtract(2,3)).to.be.equal(-1);
	});

	it('should multiply two numbers together', function() {
		expect(cal.mult(2,3)).to.be.equal(6);
	});
});