exports.getNamesWithGreeting = function (userNames) {
    return userNames.map(function (name) {
        return "Hello "+ name;
    })
};
