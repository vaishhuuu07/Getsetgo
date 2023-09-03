const DBHandler = require("../files/DBHandling");

class Login {
    constructor(app, connection) {
        this.Login(app, connection);
    }

    Login(app, connection) {
        app.post("/Login", (req, res) => {
            console.log(req.body);
            const {
                Email,
                Password,

            } = req.body;

            DBHandler.createTravelForm(
                Email,
                Password,
                
            );
            res.send("Success");
        });
    }
}

module.exports = Login;