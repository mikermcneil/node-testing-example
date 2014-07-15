/**
 * Module dependencies
 */

var _ = require('lodash');



/**
 *
 * ------------------------------
 * Usage:
 *
 * var Adder = require('adder');
 * Adder.sync(1,2) // => 3
 * Adder(1,2,function (err,result) {
 *   result; // => 3
 * })
 *
 * ------------------------------
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
module.exports = function(a,b,cb) {

  if (!a) return cb(new Error('adder() - First argument required (integer)'));
  if (!b) return cb(new Error('adder() - Second argument required (integer)'));
  if (!cb) throw new Error('adder() - Callback fn required as 3rd and final argument');

  return cb(null, a+b);
};

