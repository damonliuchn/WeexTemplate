var express = require('express');
var app = express();
var fs = require("fs");

app.use('/', express.static('dist'));
var port = 8083;
app.listen(port);
console.log('Magic happens on url http://localhost:' + port);