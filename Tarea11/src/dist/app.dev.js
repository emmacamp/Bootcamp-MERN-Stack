"use strict";

var express = require('express');

var path = require('path');

var hbs = require('hbs');

var app = express();
var publicDirectoryPath = path.join(__dirname, '../public');
var viewsPath = path.join(__dirname, '../templates/views');
var partialsPath = path.join(__dirname, '../templates/partials');
console.log(viewsPath); //Path to the views directory

app.use(express["static"](publicDirectoryPath)); //Handlebars engine and views location

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.get("", function (req, res) {
  res.render('index');
});
app.get("/about", function (req, res) {
  res.render('about');
});
app.get("/help", function (req, res) {
  res.render('help');
});
app.get("*", function (req, res) {
  res.render('not-found');
});
port = process.env.PORT || 3000;
app.listen(3000, function () {
  console.log("Server running on http://localhost:".concat(port));
});