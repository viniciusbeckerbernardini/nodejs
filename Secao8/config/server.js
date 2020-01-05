var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');


var app = express();

app.set('view engine', 'ejs');

app.set('views','./app/views');

app.use(bodyparser.urlencoded({extended:true}));

consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.include('./app/model')
	.into(app);


module.exports = app;
