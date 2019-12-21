module.exports = () =>{

	this.getNews = (connection, callback) => {
		connection.query("SELECT * FROM noticias", callback);
	};

	this.getNewsByID = (connection,newsID,callback) => {
		connection.query(`SELECT * FROM noticias where id_noticia = ${newsID}`,callback);
	};

	return this;

}