module.exports.getNews = function (app,request,response) {
    var connection = app.config.dbConnection();

    var news = new app.app.model.NewsDAO(connection);

    news.getNews((error,results) => {
        response.render("noticias/noticias",{noticias: results})
    });
};

module.exports.getNew = function (app,request,response) {
    var newsID = parseInt(request.params.id.trim());
    var connection = app.config.dbConnection();
    var news = new app.app.model.NewsDAO(connection);

    news.getNewsByID(newsID,(error,results) => {
        response.render("noticias/noticia",{noticia: results[0]});
    });
};
