const Chai = require('chai');
const expect = Chai.expect;
const cal = require('../app.js')

describe('calculator should work', function() {
	it('should add two numbers together', function() {
		expect(cal.add(2,3)).to.be.equal(5);
	});
});