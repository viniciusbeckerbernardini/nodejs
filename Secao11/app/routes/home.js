module.exports = (app) => {
	app.get('/', function(request,response){
		app.app.controller.home.getHome(app,request,response);
	});
}
