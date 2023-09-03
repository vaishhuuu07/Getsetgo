const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const TravelForm = require("./routes/TravelForm");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Vaishnavi & Anusha",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1825 * 86400 * 1000,
      httpOnly: false,
    },
  })
);

app.get("/", function (req, res) {
  res.send("abcd");
});

new TravelForm(app);
new Login(app);
app.listen(5000, () => console.log("Running on port 5000"));