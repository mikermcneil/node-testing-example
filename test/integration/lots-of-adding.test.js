/**
 * Module dependencies
 */

var assert = require('assert');
var adder = require('../../');
var FIXTURES = require('../fixtures/adder.fixture');


describe('lots of adding', function () {

  it('should work when called multiple times', function (done) {

    adder(FIXTURES.arg0, FIXTURES.arg1, function (err, result) {
      if (err) return done(err);

      assert.equal(result,FIXTURES.expectedResult);

      adder(FIXTURES.arg0, FIXTURES.arg1, function (err, result) {
        if (err) return done(err);

        assert.equal(result,FIXTURES.expectedResult);

        done();
      });
    });

  });

  it ('should work when called multiple times with both async and sync usage', function (done){

    adder(FIXTURES.arg0, FIXTURES.arg1, function (err, result) {
      if (err) return done(err);

      assert.equal(result,FIXTURES.expectedResult);

      assert.equal(adder.sync(FIXTURES.arg0, FIXTURES.arg1), FIXTURES.expectedResult);

      done();
    });

  });
});
