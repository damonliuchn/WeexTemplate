var express = require('express');
var app = express();
var fs = require("fs");

app.use('/dist', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));
var port = 8083;
app.listen(port);
console.log('Magic happens on url http://localhost:' + port + '/dist');