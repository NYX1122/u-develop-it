const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12159BoDeeFA$',
    database: 'election'
});

module.exports = db;