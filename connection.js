	var mysql = require('mysql');	
	var pool = mysql.createPool({
		host: 'localhost',
		user : 'student' ,
		password : 'default',
		database : 'pjs',
	});

module.exports = {
	pool
}