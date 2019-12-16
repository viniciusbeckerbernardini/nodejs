module.exports = (app) => {

	

	app.get('/noticias', function(request,response){
		var connection = app.config.dbConnection();

		connection.query("SELECT * FROM noticias", (error,results) => {
			response.render("noticias/noticias",{noticias: results});
		});

	});

	app.get('/formulario_inclusao_noticia', function(request,response){
		response.render('admin/form_add_noticia');
	});

	app.get('/noticia', function(request,response){
		var connection = app.config.dbConnection();

		connection.query("SELECT * FROM noticias where id_noticia = 1", (error,results) => {
			response.render("noticias/noticia",{noticia: results});
		});

	});


};