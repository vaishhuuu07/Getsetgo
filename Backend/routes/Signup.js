const DBHandler = require("../files/DBHandling");

class Signup {
    constructor(app, connection) {
        this.Signup(app, connection);
    }

    Signup(app, connection) {
        app.post("/Signup", (req, res) => {
            console.log(req.body);
            const {
                name,
                email,
                password,

            } = req.body;

            DBHandler.Signup(
                name,
                email,
                password,


               
                
            );
            res.send("Success");
        });
    }
}

module.exports = Signup;