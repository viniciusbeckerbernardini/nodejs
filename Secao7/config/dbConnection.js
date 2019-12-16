var mysql = require('mysql');

var dbConnection = () => {
	return  mysql.createConnection({
		host: "localhost",
		user: "vini",
		password: "vini",
		database: "portal_noticias"
	});
}

module.exports = () => {
	return dbConnection;
};