var assert = require('assert');
var callbackExample = require('../src/callBackExample');

var should_return_hello_with_name = function () {
    var userNames = ["Vrushali", "Janvi", "Shraddha", "Nabeel", "Krati"];

    var expectedNameGreetings = ["Hello Vrushali", "Hello Janvi", "Hello Shraddha", "Hello Nabeel", "Hello Krati"];
    var actualNameGreetings = callbackExample.getNamesWithGreeting(userNames);

    assert.deepEqual(expectedNameGreetings, actualNameGreetings);
}();


var add_greet = function (name) {
    return 'Namaste ' + name;
};

var should_greet_with_namaste = function () {
    var userNames = ["Vrushali", "Nabeel", "Krati"];
    var expectedNameGreetings = ["Namaste Vrushali", "Namaste Nabeel", "Namaste Krati"];

    var actual = callbackExample.greetWithNamaste(userNames, add_greet);
    assert.deepEqual(expectedNameGreetings, actual)

}();

