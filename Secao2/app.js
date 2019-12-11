const express = require("express");
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	res.render("session/index");

});

app.get('/tech', (req,res) => {
	res.render('session/tech');

});

app.listen(3000, () =>{
	console.log("The server is up to work with express");
});