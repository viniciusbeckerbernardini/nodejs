module.exports = (app) => {
	app.get('/noticias', function(req,res){
		res.render('noticias/noticias');
	});

	app.get('/formulario_inclusao_noticia', function(req,res){
		res.render('admin/form_add_noticia');
	});

};