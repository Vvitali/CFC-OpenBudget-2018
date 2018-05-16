var assert = require('assert');
import 'babel-polyfill';

import csvParser from "../src/util/csvParser.js";

describe('Array', function() {
	describe('#indexOf()', function() {

		it('should return an object', function() {
			const returnedObject = 	csvParser("ACCOUNT,ACCOUNT_DESCRIPTION,TYPE,ORIGINAL_APPROP,FID");
			assert.equal(typeof(returnedObject), "object");
		});

		it('should return an object with 5 fields', function() {
			const returnedObject = 	csvParser("ACCOUNT,ACCOUNT_DESCRIPTION,TYPE,ORIGINAL_APPROP,FID");			
			assert.equal(Object.keys(returnedObject[0]).length, 5);
		});

		it('OBJECT FIELDS NOT empty', function() {
			const returnedObject = csvParser("ACCOUNT,ACCOUNT_DESCRIPTION,TYPE,ORIGINAL_APPROP,FID");			
			const testData =  {
				account: "ACCOUNT"
				, description:"ACCOUNT_DESCRIPTION"
				, type: "TYPE"
				, ORIGINAL_APPROP: "ORIGINAL_APPROP"
				, FID: "FID"
			};
			assert.equal(returnedObject[0], testData);
		});

	});
});