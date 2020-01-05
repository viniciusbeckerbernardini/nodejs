module.exports = (app) => {

	app.get('/noticias', function(request,response){
		var connection = app.config.dbConnection();

		var news = new app.app.model.NewsDAO(connection);

		news.getNews((error,results) => {
			response.render("noticias/noticias",{noticias: results})
		});

	});

	app.get('/noticia/:id', function(request,response){
		var newsID = parseInt(request.params.id.trim());
		var connection = app.config.dbConnection();
		var news = new app.app.model.NewsDAO(connection);

		news.getNewsByID(newsID,(error,results) => {
			response.render("noticias/noticia",{noticia: results[0]});
		});

	});

};
