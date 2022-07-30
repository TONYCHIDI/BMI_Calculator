const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const https = require("https");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
    let Weight = parseFloat(req.body.weight);
    let Height = parseFloat(req.body.height);

    let BMI = Weight/Math.pow(Height,2);

    let realBMI = BMI.toFixed(2);

    res.send("<h1>Your BMI is " + realBMI + ".</h1>");
});

app.listen(process.env.PORT || port, () => {
    console.log('App is running on port ' + port)
});