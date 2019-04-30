var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host       :'localhost',
    user       :'chrisvelard0',
    database   :'join_us'
});
// Selecting data
// var q = 'Select count(*) as total from users';
// connection.query(q,function(error,results,fields){
//     if (error) throw error;
//     console.log(results[0].total);
// });

//Inserting Data
// var q = 'insert into users (email) values ("rusty_the_dog@gmail.com")';
// 
//connection.query(q,function(error,results,fields){
//      if (error) throw error;
//      console.log(results);
//  });

//Inserting data #2
//  var person = {
//      email: faker.internet.email(),
//      created_at: faker.date.past()
//  };
  
//   var end_result = connection.query('INSERT INTO users SET ?', person, function(error, result) {
//    if (error) throw error;
//    console.log(result);
//  });

// console.log(end_result.sql);




// connection.end();

//Inserting lots of data

var data = [];
for(var i = 0; i < 500; i++){
 data.push([
  faker.internet.email(),
  faker.date.past()
  ]);
}
var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(error, result) {
  console.log(error);
  console.log(result);
});

connection.end();


