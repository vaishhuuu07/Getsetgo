const  connection  = require("./Connection");
const  uuid = require("uuid-random");
exports.createTravelForm = (
    
    fullName,
    email,
    destination,
    departureDate,
    returnDate,
    travelers,
    additionalInfo
) => {
    let sql = `Insert into travelForm Values(?,?, ?, ?, ?, ?, ?, ?);`;
    console.log(fullName,email)
    connection.query(
        sql,
        [
            uuid(),
            fullName,
            email,
            destination,
            departureDate,
            returnDate,
            travelers,
            additionalInfo,
        ],
        (err, results) => {
            if (err) return console.log(err);
            else {
                console.log("Form has been created");
            }
        }
    );
};

exports.Signup = (
    name,
    email,
    password,

) => {
    let sql = `Insert into userinfo Values(?,?, ?);`;
    console.log(name,email)
    connection.query(
        sql,
        [
            name,
                email,
                password,
            
        ],
        (err, results) => {
            if (err) return console.log(err);
            else {
                console.log("Signup has been created");
            }
        }
    );
};

exports.Login =  (email,password) => {
        console.log(email);
        let sql = "Select * from userinfo where email=?  and  password=?;";
        return new Promise((resolve, reject) => {
            connection.query(sql, [email,password], (err,results) => {
                if (err) console.log(err);
                else if (results.length != 0) {
                    console.log(results);
                    let responseData = {
                        name: results[0].name,
                        email: results[0].email,
                        password: results[0].password,
                        // Add for rest values to fetch
                    };
                    resolve(responseData);
                } else resolve(false);
            });
        });
    };


// exports.getFormDetails = async (email) => {
//     console.log(email);
//     let sql = "Select * from travelForm where email=?;";
//     return new Promise((resolve, reject) => {
//         connection.query(sql, [email], (err, results) => {
//             if (err) console.log(err);
//             else if (results.length != 0) {
//                 console.log(results);
//                 let responseData = {
//                     firstName: results[0].fullName,
//                     email: results[0].email,
//                     // Add for rest values to fetch
//                 };
//                 resolve(responseData);
//             } else resolve(false);
//         });
//     });
// };