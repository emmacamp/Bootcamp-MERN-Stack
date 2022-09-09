"use strict";

var path = require('path');

var express = require('express');

var app = express();
var publicPath = path.join(__dirname, '..', 'public');
app.use(express["static"](publicPath));
app.get('/about', function (req, res) {
  res.send('About page');
});
app.listen(3000, function () {
  console.log('Server is up on port 3000');
});