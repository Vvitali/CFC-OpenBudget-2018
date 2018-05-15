var assert = require('assert');
import 'babel-polyfill';

var csvParser = require("../src/util/csvParser.js");

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return an object with 5 fields', function() {


			assert.equal([1,2,3].indexOf(4), -1);
		});
	});
});