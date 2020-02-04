module.exports = (app) => {

    app.get('/add/noticia', function(request,response){
        app.app.controller.admin.getNewsForm(app,request,response);
    });

    app.post('/add/noticia', function(request, response){
        app.app.controller.admin.save(app,request,response);
    });
}
