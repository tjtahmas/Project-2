require('dotenv').config();
//use pool to make queries and save data
const mysql = require('mysql2');
const pool = mysql.createPool(
    {
      host: process.env.DB_HOST, 
      user: process.env.DB_USER, 
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD
    }
);

//let sql = 'SELECT * FROM posts;';

// //execute sql statement and do function whith result of attempting that statement
// pool.execute(sql, function(err, result) {

//     if(err) throw err;
//     /*console.log(result);*/
//     result.forEach((res) => {
//         console.log(res.title);

//     })
// });
module.exports = pool.promise();