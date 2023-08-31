const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'student'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
    
  }
});
db.query('select * from student',(error,results)=>
{
  if(error)
  {
    console.log(error);
  }
  else{
    console.log(results);
  }
})