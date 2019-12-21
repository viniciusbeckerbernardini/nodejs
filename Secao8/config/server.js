var express = require('express');
var consign = require('consign');



var app = express();

app.set('view engine', 'ejs');

app.set('views','./app/views');

consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.include('./app/model')
	.into(app);


module.exports = app;