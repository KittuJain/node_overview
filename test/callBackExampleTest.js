var assert = require('assert');
var nameCallback = require('callBackExample');

var should_return_hello_with_name = function () {
    var userNames = ["Vrushali", "Janvi", "Shraddha", "Nabeel", "Krati"];

    var expectedNameGreetings = ["Hello Vrushali", "Hello Janvi", "Hello Shraddha", "Hello Nabeel", "Hello Krati"];
    var actualNameGreetings = nameCallback.getNamesWithGreeting(userNames);

    assert.deepEqual(expectedNameGreetings, actualNameGreetings);
}();
