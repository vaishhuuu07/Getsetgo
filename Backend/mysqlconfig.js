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

const dataToInsert = {
  fullname: 'John Doe',
  email: 'johndoe@example.com',
  destination: 'Some Destination',
};

// Insert data into the database
const sql = "INSERT INTO test (fullname, email, destination) VALUES(?,?,?)";

const values = [
  dataToInsert.fullname,
  dataToInsert.email,
  dataToInsert.destination
];
db.query(sql,values,(err, results) => {
  if (err) {
    console.error('Error inserting data: ' + err);
  } else {
    console.log('Data inserted successfully');
  }
});