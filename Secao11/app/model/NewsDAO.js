function NewsDAO(connection){
	this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback){
	this._connection.query("SELECT * FROM noticias", callback);
};

NewsDAO.prototype.getNewsByID = function(newsID, callback){
	this._connection.query(`SELECT * FROM noticias where id_noticia = ${newsID}`,callback);
};

NewsDAO.prototype.save = function(queryString, callback){
	this._connection.query(`INSERT INTO noticias(titulo,noticia,resumo,autor,data_noticia) 
									VALUES('${queryString.newsTitle}','${queryString.newsName}','${queryString.newsResume}','${queryString.newsAuthor}','${queryString.newsDate}' )`,callback);
}

module.exports = function(){
	return NewsDAO;
}
