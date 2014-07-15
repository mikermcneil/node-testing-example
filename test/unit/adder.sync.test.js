/**
 * Module dependencies
 */

var assert = require('assert');
var addersync = require('../../lib/adder.sync');
var FIXTURES = require('../fixtures/adder.fixture');



describe('adder.sync()', function() {


  it('should add two arguments and return the result', function (){

    var result = addersync(FIXTURES.arg0, FIXTURES.arg1);

    // For more info:
    // http://nodejs.org/api/assert.html

    assert.equal(result,FIXTURES.expectedResult);

    // Same as:
    // assert(result === 51, 'Should have been 51!');

    // Same as:
    // if (result !== 51) throw new Error();

  });

});
