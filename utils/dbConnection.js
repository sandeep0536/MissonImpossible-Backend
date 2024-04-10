const mysql = require('mysql2');
let configobj = require("./config").config;
//console.log(configobj)
const dbConnection = mysql.createPool({
    host: configobj.DATABASE_HOST,
    user: configobj.DATABASE_USER,
    password: configobj.DATABASE_PASSWORD,
    database: configobj.DATABASE_NAME
});

dbConnection.on('connection', function(connection) {
    console.log('DB Connection established');

    connection.on('error', function(err) {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function(err) {
        console.error(new Date(), 'MySQL close', err);
    });

});

module.exports = dbConnection.promise();