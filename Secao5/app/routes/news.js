var dbConnection = require("../../config/dbConnection");

module.exports = (app) => {

	var connection = dbConnection();

	app.get('/noticias', function(request,response){
		connection.query("SELECT * FROM noticias", (error,results) => {
			response.render("noticias/noticias",{noticias: results});
		});

	});

	app.get('/formulario_inclusao_noticia', function(request,response){
		response.render('admin/form_add_noticia');
	});

};