const mysql = require('mysql2');

const connectMysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mysql',
});

connectMysql.connect(function (err) {
  if (err) {
    throw err;
  }

  console.log('connect oke');
});
