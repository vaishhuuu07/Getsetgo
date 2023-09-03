const DBHandler = require("../files/DBHandling");

class Login {
    constructor(app, connection) {
        this.Login(app, connection);
    }

    Login(app, connection) {
        app.post("/Login", async(req, res) => {
            console.log(req.body);
            const {
                email,
                password,

            } = req.body;
             
            let loginData =await DBHandler.Login(
                email,
                password,
                
            );
            res.send(loginData);
        });
    }
}

module.exports = Login;