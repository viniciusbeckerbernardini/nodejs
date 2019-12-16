var mysql = require('mysql');

module.exports = () => {
	return  mysql.createConnection({
		host: "localhost",
		user: "vini",
		password: "vini",
		database: "portal_noticias"
	});
}
