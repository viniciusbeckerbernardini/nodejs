module.exports = (app) => {

	app.get('/noticias', function(request,response){
		var connection = app.config.dbConnection();
		var news = app.app.model.News;

		news.getNews(connection, (error,results) => {
			response.render("noticias/noticias",{noticias: results})
		});

	});

	app.get('/noticia/:id', function(request,response){
		var newsID = parseInt(request.params.id.trim());
		var connection = app.config.dbConnection();
		var news = app.app.model.News;

		news.getNewsByID(connection,newsID,(error,results) => {
			response.render("noticias/noticia",{noticia: results[0]});
		});

	});


	app.get('/formulario_inclusao_noticia', function(request,response){
		response.render('admin/form_add_noticia');
	});



};