module.exports = (app) => {

    app.get('/add/noticia', function(request,response){
        response.render('admin/addNews');
    });

    app.post('/add/noticia', function(request, response){
        let newsDataForm = request.body;

        var connection = app.config.dbConnection();
        var news = app.app.model.News;

        news.save(connection,newsDataForm,(error)=>{
            if(error != null){
                response.send(error);
            }else{
                response.redirect("/noticias");
            }
        })

    });
}
