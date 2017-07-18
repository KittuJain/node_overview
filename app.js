var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var RESOURCES_PATH = './resources/users.json';

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/users', function (req, res) {
    var fileContents = fs.readFileSync(RESOURCES_PATH, 'utf-8');
    var users = JSON.parse(fileContents);
    res.render("users", {layout: false, users: users});
});

app.get('/add', function (req, res) {
    res.render("addUsers");
});

app.post('/addUser', function (req, res) {
    var fileContents = fs.readFileSync(RESOURCES_PATH, 'utf-8');
    var users = JSON.parse(fileContents);
    users.push(req.body);
    fs.writeFileSync(RESOURCES_PATH, JSON.stringify(users));
    res.redirect("/users");
});

module.exports = app;
