var app = require ('./config/server');
var homeRoutes = require ('./app/routes/home')(app);
var newsRoutes = require ('./app/routes/news')(app);

app.listen(3000, function(){
    console.log("Eai meu irmão!");
});