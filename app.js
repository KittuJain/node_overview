var express = require('express');
var path = require('path');
var fs = require('fs');

var RESOURCES_PATH = './resources/users.json';

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.get('/', function (req, res) {
    res.render("index");
});


module.exports = app;
