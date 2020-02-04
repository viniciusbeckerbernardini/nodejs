module.exports = (app) => {

	app.get('/noticias', function(request,response){
		app.app.controller.news.getNews(app,request,response);
	});

	app.get('/noticia/:id', function(request,response){
		app.app.controller.news.getNew(app,request,response);
	});

};
