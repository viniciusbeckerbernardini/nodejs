app.get('/add/noticia', function(request,response){
    response.render('admin/addNews');
});

app.post('/add/noticia', function(request, response){
    throw "building";
});
