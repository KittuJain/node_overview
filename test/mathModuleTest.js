var assert = require('assert');
var mathModule = require('../src/mathModule');

var test_addition_of_two_values = function () {
    var sum = mathModule.add(1, 3);
    assert.equal(4, sum);
}();

var test_multiplication_of_two_values = function () {
    var product = mathModule.multiply(10, 5);
    assert.equal(50, product);
}();


