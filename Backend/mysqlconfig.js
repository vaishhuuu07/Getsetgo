const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vaishu@123',
  database: 'Student'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
    
  }
});

const dataToInsert = {
  Full_name: 'John Doe',
  Email: 'johndoe@example.com',
  Destination: 'Some Destination',
};

// Insert data into the database
const sql = "INSERT INTO Student (Full_name, Email, Destination) VALUES(?,?,?)";

const values = [
  dataToInsert.Full_name,
  dataToInsert.Email,
  dataToInsert.Destination
];
db.query(sql,values,(err, results) => {
  if (err) {
    console.error('Error inserting data: ' + err);
  } else {
    console.log('Data inserted successfully');
  }
});