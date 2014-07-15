/**
 * Module dependencies
 */

var assert = require('assert');
var adder = require('../../');
var FIXTURES = require('../fixtures/adder.fixture');


describe('adder()', function () {

  before('prepare the adder() function', function (done) {
    // clear the adder cache
    // (this is pretend)
    done();
  });

  it ('should add two arguments and send the result as the second argument to the callback', function (done){

    adder(FIXTURES.arg0, FIXTURES.arg1, function (err, result) {
      if (err) return done(err);

      assert.equal(result,FIXTURES.expectedResult);
      done();
    });

  });
});
