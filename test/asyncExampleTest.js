var assert = require('assert');

var value = 0;
var getAsyncResponse = function (timeout) {
    setTimeout(function () {
        value = 2;
    }, timeout);
    value = 4;
};

var dd = function () {
    getAsyncResponse(1000);
    assert.equal(4, value);
    setTimeout(function () {
        assert.equal(2, value);
    }, 1000);

}();