var http = require('http');

var server = http.createServer(function(req,res){
	let  category = req.url;

	switch (category){
		case "/tecnologia":
		res.end("<html><body>Portal de tecnologia</body></html>");
		break;
		case "/moda":
		res.end("<html><body>Portal de moda</body></html>");
		break;
		case "/beleza":
		res.end("<html><body>Portal de beleza</body></html>");
		break;
		default:
		res.end("<html><body>Portal de Notícias</body></html>");
		break;
	}
});

server.listen(3000);