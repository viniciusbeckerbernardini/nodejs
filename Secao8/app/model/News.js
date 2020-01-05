module.exports = () =>{

	this.getNews = (connection, callback) => {
		connection.query("SELECT * FROM noticias", callback);
	};

	this.getNewsByID = (connection,newsID,callback) => {
		connection.query(`SELECT * FROM noticias where id_noticia = ${newsID}`,callback);
	};

	this.save = (connection, queryString, callback) => {
		connection.query(`INSERT INTO noticias(titulo,noticia) 
										VALUES('${queryString.newsTitle}','${queryString.newsName}')`,callback);
	}

	return this;

}
