const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const = reservationInfo = [
    {
        routeName: "reservation",
        name: custName,
        phone: custPhone,
        email: custEmail,
        id: custID
    },
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/orders", function(req,res) {
    let newOrder = req.body;




})