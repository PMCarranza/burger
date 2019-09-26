// setup MySQL connection
// var mysqql is being passed the mysql module to manipulate the MySQL database
var mysql = require('mysql');

// connction to the DB is created
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_DB'
});

// make connection
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
});

// export connection for our ORM to use.
module.exports = connection;