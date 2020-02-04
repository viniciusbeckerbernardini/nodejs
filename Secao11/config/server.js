var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();

app.set('view engine', 'ejs');

app.set('views','./app/views');

app.use(bodyparser.urlencoded({extended:true}));
app.use(expressValidator());

consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.include('./app/model')
	.then('./app/controller')
	.into(app);


module.exports = app;
