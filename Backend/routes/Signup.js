const DBHandler = require("../files/DBHandling");

class Signup {
    constructor(app, connection) {
        this.Signup(app, connection);
    }

    Login(app, connection) {
        app.post("/Signup", (req, res) => {
            console.log(req.body);
            const {
                Name,
                Email,
                Password,
                Signup,
                Login,

            } = req.body;

            DBHandler.createTravelForm(
                Name,
                Email,
                Password,
                Signup,
                Login,

               
                
            );
            res.send("Success");
        });
    }
}

module.exports = Signup;