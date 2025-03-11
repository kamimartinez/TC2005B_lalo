const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    database: 'practicas', 
    password: ''
});

module.exports = pool.promise();