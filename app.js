var express = require('express');
var path = require('path');
var fs = require('fs');

var RESOURCES_PATH = './resources/users.json';

var app = express();
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.get('/', function (req, res, next) {
    res.render("index");
});


module.exports = app;
