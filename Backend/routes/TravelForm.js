const DBHandler = require("../files/DBHandling");

class TravelForm {
    constructor(app, connection) {
        this.travelForm(app, connection);
    }

    travelForm(app, connection) {
        app.post("/submitTravelForm", (req, res) => {
            console.log(req.body);
            const {
                fullName,
                email,
                destination,
                departureDate,
                returnDate,
                travelers,
                additionalInfo,
            } = req.body;

            DBHandler.createTravelForm(
                fullName,
                email,
                destination,
                departureDate,
                returnDate,
                travelers,
                additionalInfo
            );
            res.send("Success");
        });
    }
}

module.exports = TravelForm;