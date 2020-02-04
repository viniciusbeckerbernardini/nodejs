module.exports.getNewsForm = function (app,request,response) {
    response.render('admin/addNews',{errors:[],fields:[]});
};

module.exports.save = function (app,request,response) {
    let newsDataForm = request.body;

    request.assert( 'newsTitle','O título é obrigatório').notEmpty();
    request.assert('newsResume', 'O resumo deve conter entre 10 e 100 caracteres').isLength({min:10,max:100});
    request.assert('newsAuthor','Autor é obrigatório').notEmpty();
    request.assert('newsDate','A data não pode ser vazia').notEmpty();
    request.assert('newsDate','A data só é aceita no formato DD/MM/YYYY').isDate({format:'DD/MM/YYYY'});
    request.assert( 'newsName','A notícia não pode ser vázia').notEmpty();

    var errors = request.validationErrors();

    if(errors){
        console.log(errors);
        response.render('admin/addNews',{errors:errors,fields:newsDataForm});
        return;
    }

    var connection = app.config.dbConnection();

    var news = new app.app.model.NewsDAO(connection);

    news.save(newsDataForm,(error)=>{
        if(error != null){
            response.send(error);
        }else{
            response.redirect("/noticias");
        }
    })
};
