exports.getNamesWithGreeting = function (userNames) {
    return userNames.map(function (name) {
        return "Hello "+ name;
    })
};

exports.greetWithNamaste = function (names, callback) {
   return names.map(callback)
};